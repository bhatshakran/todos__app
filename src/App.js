import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listTodos } from './graphql/queries';
import {
	createTodo as createTodoMutation,
	deleteTodo as deleteTodoMutation,
} from './graphql/mutations';

const initialFormState = { name: '', description: '' };

function App() {
	const [todos, setTodos] = useState([]);
	const [formData, setFormData] = useState(initialFormState);

	useEffect(() => {
		fetchTodos();
	}, []);

	// on change function
	async function onChange(e) {
		if (!e.target.files[0]) return;
		const file = e.target.files[0];
		setFormData({ ...formData, image: file.name });
		await Storage.put(file.name, file);
		fetchTodos();
	}

	async function fetchTodos() {
		const apiData = await API.graphql({ query: listTodos });
		const todosFromApi = apiData.data.listTodos.items;
		await Promise.all(
			todosFromApi.map(async todo => {
				if (todo.image) {
					const image = await Storage.get(todo.image);
					todo.image = image;
				}
				return todo;
			})
		);
		setTodos(apiData.data.listTodos.items);
	}

	async function createTodo() {
		if (!formData.name || !formData.description) return;
		await API.graphql({
			query: createTodoMutation,
			variables: { input: formData },
		});
		if (formData.image) {
			const image = await Storage.get(formData.image);
			formData.image = image;
		}

		setTodos([...todos, formData]);
		setFormData(initialFormState);
	}

	async function deleteTodo({ id }) {
		const newTodosArray = todos.filter(todo => todo.id !== id);
		setTodos(newTodosArray);
		await API.graphql({
			query: deleteTodoMutation,
			variables: { input: { id } },
		});
	}

	return (
		<div className='App'>
			<h1>My Todo App</h1>
			<input
				onChange={e => setFormData({ ...formData, name: e.target.value })}
				placeholder='Todo name'
				value={formData.name}
			/>
			<input
				onChange={e =>
					setFormData({ ...formData, description: e.target.value })
				}
				placeholder='Todo description'
				value={formData.description}
			/>
			<input type='file' onChange={onChange} />
			<button onClick={createTodo}>Create Todo</button>
			<div style={{ marginBottom: 30 }}>
				{todos.map(todo => (
					<div key={todo.id || todo.name}>
						<h2>{todo.name}</h2>
						<p>{todo.description}</p>
						<button onClick={() => deleteTodo(todo)}>Delete Todo</button>
						{todo.image && <img src={todo.image} style={{ width: 400 }} />}
					</div>
				))}
			</div>
			<AmplifySignOut />
		</div>
	);
}

export default withAuthenticator(App);
