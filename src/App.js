import styled from 'styled-components';
import { Nav } from './components/Nav';
import { Search } from './components/Search';

const StyledButton = styled.button`
	width: 500px;
	height: 500px;
`;

function App() {
	return (
		<>
			<Nav />
			<StyledWrapper>
				<StyledContainer>
					<StyledListing>
						<Search />
					</StyledListing>
				</StyledContainer>
			</StyledWrapper>
		</>
	);
}

const StyledWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
`;

const StyledContainer = styled.div`
	background-color: grey;
	height: 100vh;
	padding: 20px;
	background-color: #ccc;
`;

const StyledListing = styled.div`
	padding: 20px;
	height: 500px;
	background-color: white;
`;

export default App;
