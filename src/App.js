import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>Hello from aws!</header>
			<AmplifySignOut />
		</div>
	);
}

export default withAuthenticator(App);
