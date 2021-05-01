import React, { useState } from 'react';
import styled from 'styled-components';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { API } from 'aws-amplify';
import {
	createTodo as createTodoMutation,
	// deleteTodo as deleteTodoMutation,
} from '../graphql/mutations';

const initialFormState = { name: '', description: '' };

const TodoForm = () => {
	const [todos, setTodos] = useState([]);
	const [formData, setFormData] = useState(initialFormState);

	// handle todo name function
	const handleTodoName = e => {
		setFormData({ ...formData, name: e.target.value });
	};

	// handle todo description function
	const handleTodoDesc = e => {
		setFormData({ ...formData, description: e.target.value });
	};

	// file on change function
	const onChange = e => {
		if (!e.target.files[0]) return;
		const file = e.target.files[0];
		setFormData({ ...formData, image: file.name });
	};

	// create todo function

	const createTodo = async () => {
		if (!formData.name || !formData.description) return;
		await API.graphql({
			query: createTodoMutation,
			variables: { input: formData },
		});
		setTodos([...todos, formData]);
		setFormData(initialFormState);
		console.log(todos);
	};

	return (
		<TodoWrapper>
			<form>
				<div className='input__item'>
					<input
						type='text'
						placeholder='Todo'
						onChange={e => handleTodoName(e)}
					/>
				</div>
				<div className='input__item'>
					<input
						type='text'
						placeholder=' Description'
						onChange={e => handleTodoDesc(e)}
					/>
				</div>
				<div className='input__item'>
					<input
						type='file'
						className='input__file'
						onChange={onChange}
						id='file'
					/>
					<label htmlFor='file'>Select file</label>
				</div>
			</form>
			<button className='input__btn' onClick={createTodo}>
				<AddOutlinedIcon />
			</button>
		</TodoWrapper>
	);
};

export default TodoForm;

const TodoWrapper = styled.div`
	form {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		.input__item {
			margin: 2rem 0;
			padding: 0 6rem;
			transform: perspective(400px) rotateY(25deg);
			// -webkit-perspective: 400px;
			// -moz-perspective: 400px;

			input {
				height: 35px;
				width: 100%;
				background: none;
				border: 1px solid rgba(255, 255, 255, 0.18);
				border-radius: 10px;
				color: #fff;
				padding: 0.2rem 0.5rem;
				outline: none;
				::placeholder {
					color: #fff;
				}
			}
			.input__file {
				opacity: 0;
				width: 0.1px;
				height: 0.1px;
				position: absolute;
			}
			label {
				margin-left: 3rem;
				display: block;
				position: relative;
				width: 200px;
				height: 50px;
				border-radius: 25px;
				background: linear-gradient(
					40deg,
					rgba(58, 124, 222, 1) 0%,
					rgba(0, 212, 255, 1) 100%
				);
				box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				font-weight: bold;
				cursor: pointer;
				transition: transform 0.2s ease-out;
				border: none;
			}
		}
	}
	.input__btn {
		position: absolute;
		top: 43%;
		transform: translateY(-50%);
		right: -40px;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		border: 1px solid rgba(255, 255, 255, 0.4);
		background: transparent;
		color: #fff;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		transform: perspective(400px) rotateY(25deg);
		&:hover {
			border: 1px solid #ececec;
			transform: scale(1.005);
		}
	}
`;
// <h1>My Todo App</h1>
// 			<input
// 				// onChange={e => setFormData({ ...formData, name: e.target.value })}
// 				placeholder='Todo name'
// 				// value={formData.name}
// 			/>
// 			<input
// 				// onChange={e =>
// 				// setFormData({ ...formData, description: e.target.value })
// 				// }
// 				placeholder='Todo description'
// 				// value={formData.description}
// 			/>
// 			{/* <input type='file' onChange={onChange} /> */}
// 			<button
// 			// onClick={createTodo}
// 			>
// 				Create Todo
// 			</button>
// 			{/* <div style={{ marginBottom: 30 }}>
// 				{todos.map(todo => (
// 					<div key={todo.id || todo.name}>
// 						<h2>{todo.name}</h2>
// 						<p>{todo.description}</p>
// 						<button onClick={() => deleteTodo(todo)}>Delete Todo</button>
// 						{todo.image && (
// 							<img src={todo.image} style={{ width: 400 }} alt='todo-image' />
// 						)}
// 					</div>
// 				))}
// 			</div> */}
// 			<AmplifySignOut />
// 		</div>
