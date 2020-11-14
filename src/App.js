import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const StyledButton = styled.button`
	width: 500px;
	height: 500px;
`;

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<StyledButton>HELLLO</StyledButton>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
