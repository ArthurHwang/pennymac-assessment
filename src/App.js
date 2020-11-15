import styled from 'styled-components';
import { Nav } from './components/Nav';
import { Search } from './components/Search';
import { Movies } from './components/Movies';
import { NoResult } from './components/NoResult';
import { useState, Fragment } from 'react';

export const App = () => {
	const [input, setInput] = useState('');
	const [movies, setMovies] = useState([]);
	const [noResult, setNoResult] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		const movies = await fetch(
			`https://api.tvmaze.com/search/shows?q=${input}`
		);
		const body = await movies.json();
		if (body.length) {
			setMovies(body);
			setNoResult(false);
		} else {
			setMovies([]);
			setNoResult(true);
		}
	};

	const handleChange = e => {
		setInput(e.target.value);
	};

	console.log(movies);

	return (
		<Fragment>
			<Nav />
			<StyledWrapper>
				<StyledContainer>
					<StyledListing>
						<Search
							value={input}
							onSubmit={handleSubmit}
							onChange={handleChange}
						/>
						{noResult ? <NoResult /> : <Movies movies={movies} />}
					</StyledListing>
				</StyledContainer>
			</StyledWrapper>
		</Fragment>
	);
};

const StyledWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
`;

const StyledContainer = styled.div`
	background-color: grey;
	height: auto;
	padding: 20px;
	background-color: #ccc;
`;

const StyledListing = styled.div`
	padding: 20px;
	height: auto;
	background-color: white;
`;

export default App;
