import styled from 'styled-components';
import { Nav } from './components/Nav';
import { Search } from './components/Search';
import { useState } from 'react';
import { Movies } from './components/Movies';

export const App = () => {
	const [input, setInput] = useState('');
	const [movies, setMovies] = useState([]);

	const handleSubmit = async e => {
		e.preventDefault();
		const movies = await fetch(
			`https://api.tvmaze.com/search/shows?q=${input}`
		);
		const body = await movies.json();
		setMovies(body);
	};

	const handleChange = e => {
		setInput(e.target.value);
	};

	return (
		<>
			<Nav />
			<StyledWrapper>
				<StyledContainer>
					<StyledListing>
						<Search
							value={input}
							onSubmit={handleSubmit}
							onChange={handleChange}
						/>
						<Movies movies={movies} />
					</StyledListing>
				</StyledContainer>
			</StyledWrapper>
		</>
	);
};

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
