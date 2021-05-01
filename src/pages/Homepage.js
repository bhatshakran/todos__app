import React from 'react';
import styled from 'styled-components';
import TodoForm from '../components/TodoForm';
// import { AmplifySignOut } from '@aws-amplify/ui-react';

const Homepage = () => {
	return (
		<HomeWrapper>
			<div className='home__intro'>
				<h1>Ultimate Todo App</h1>
			</div>
			<div className='home__todoCard'>
				{/* <div className='todoCard__circle c-one'></div> */}
				<div className='todoCard__circle c-two'></div>
				<div className='todoCard__circle c-three'></div>
				{/* <div className='todoCard__circle c-four'></div> */}
				<div className='todoCard__emoji1'>🔥</div>
				<div className='todoCard__emoji2'>🤩</div>
				<div className='todoCard__createTodo'></div>
				<TodoForm />
			</div>
			{/* <AmplifySignOut style={{ marginTop: '4rem' }} /> */}
		</HomeWrapper>
	);
};

export default Homepage;
const HomeWrapper = styled.div`
	background: rgb(2, 0, 36);
	background: linear-gradient(
		90deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(58, 124, 222, 1) 0%,
		rgba(0, 212, 255, 1) 100%
	);
	height: 100vh;
	padding: 4rem;
	margin: 0;
	display: flex;
	flex-direction: column;
	justif-content: center;
	place-items: center;
	position: relative;

	.home__intro {
		h1 {
			margin: 0;
			color: #fff;
			font-family: 'Poppins';
		}
	}
	.home__todoCard {
		height: 300px;
		width: 500px;
		background: rgba(255, 255, 255, 0.25);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		margin-top: 3rem;
		position: relative;
		z-index: 1;
		transform: perspective(600px) rotateY(25deg);

		.todoCard__circle {
			width: 120px;
			height: 120px;
			border-radius: 50%;
			background: linear-gradient(220deg, #afcff0, #26a9ef, #779fd4);
			position: absolute;
			z-index: -10;
			transform: perspective(600px) rotateY(25deg);
		}
		.c-one {
			top: -50px;
			right: 0;
			z-index: -10;
		}
		.c-two {
			top: -30px;
			left: 12px;
			width: 80px;
			height: 80px;
		}
		.c-three {
			bottom: -40px;
			left: -30px;
			width: 100px;
			height: 100px;
		}
		.todoCard__createTodo {
			position: absolute;
			width: 110px;
			height: 110px;
			right: -75px;
			background: rgba(255, 255, 255, 0.15);
			box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(4px);
			border-radius: 18px;
			border: 1px solid rgba(255, 255, 255, 0.18);
			top: 30%;
			transform: translateY(-50%);
			transform: perspective(600px) rotateY(25deg);

			&:after {
				content: 'Add todo';
				position: absolute;
				bottom: 10px;
				width: 100%;
				right: 0px;
				color: rgba(255, 255, 255, 0.8);
			}
		}
		.todoCard__emoji1,
		.todoCard__emoji2 {
			position: absolute;

			width: 70px;
			height: 70px;
			background: rgba(255, 255, 255, 0.15);
			box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(4px);
			border-radius: 5px 0 0 5px;
			border: 1px solid rgba(255, 255, 255, 0.18);
			display: flex;
			place-items: center;
			justify-content: center;
			font-size: 2.3rem;
			transform: perspective(600px) rotateY(25deg);
		}
		.todoCard__emoji1 {
			left: -72px;
			top: 50%;
			transform: translateY(-50%);
			border-right: 0;
		}
		.todoCard__emoji2 {
			position: absolute;
			right: -69px;
			top: 75%;
			border-left: 0;
			border-radius: 0px 5px 5px 5px;
			transform: perspective(400px) rotateY(30deg);
		}
	}
`;
