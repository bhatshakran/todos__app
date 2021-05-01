import React from 'react';
import './App.css';

// import { withAuthenticator } from '@aws-amplify/ui-react';
// import { listTodos } from './graphql/queries';

import Homepage from './pages/Homepage';

function App() {
	// const [todos, setTodos] = useState([]);
	// const [formData, setFormData] = useState(initialFormState);

	// useEffect(() => {
	// 	fetchTodos();
	// }, []);

	// on change function
	// async function onChange(e) {
	// 	if (!e.target.files[0]) return;
	// 	const file = e.target.files[0];
	// 	setFormData({ ...formData, image: file.name });
	// 	await Storage.put(file.name, file);
	// 	fetchTodos();
	// }

	// async function fetchTodos() {
	// 	const apiData = await API.graphql({ query: listTodos });
	// 	const todosFromApi = apiData.data.listTodos.items;
	// 	console.log(todosFromApi[0].image);
	// 	await Promise.all(
	// 		todosFromApi.map(async todo => {
	// 			if (todo.image) {
	// 				const image = await Storage.get(todo.image);
	// 				todo.image = image;
	// 			}
	// 			return todo;
	// 		})
	// 	);
	// 	setTodos(apiData.data.listTodos.items);
	// }

	// async function createTodo() {
	// 	if (!formData.name || !formData.description) return;
	// 	await API.graphql({
	// 		query: createTodoMutation,
	// 		variables: { input: formData },
	// 	});
	// 	if (formData.image) {
	// 		const image = await Storage.get(formData.image);
	// 		formData.image = image;
	// 	}

	// 	setTodos([...todos, formData]);
	// 	setFormData(initialFormState);
	// }

	// async function deleteTodo({ id }) {
	// 	const newTodosArray = todos.filter(todo => todo.id !== id);
	// 	setTodos(newTodosArray);
	// 	await API.graphql({
	// 		query: deleteTodoMutation,
	// 		variables: { input: { id } },
	// 	});
	// }

	return (
		<div className='App'>
			<Homepage />
		</div>
	);
}

export default App;
