import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import debounce from "lodash.debounce";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useState } from "react";

const searchAPI = (url) => fetch(url);
const debouncedMovies = AwesomeDebouncePromise(searchAPI, 1000);
export const Search = ({ setMovies, setInput, setNoResult, value }) => {
	let location = useLocation();
	let history = useHistory();

	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const movies = await fetch(
			`https://api.tvmaze.com/search/shows?q=${value}`
		);

		const body = await movies.json();
		if (body.length) {
			setMovies(body);
			setNoResult(false);
		} else {
			setMovies([]);
			setNoResult(true);
		}

		// push route to home if user is on episode page for cleaner rendering if they search multiple times
		setIsLoading(false);

		if (location.pathname !== "/") {
			history.push("/");
		}
	};

	const handleChange = async (e) => {
		setInput(e.target.value);

		setIsLoading(true);

		const movies = await debouncedMovies(
			`https://api.tvmaze.com/search/shows?q=${e.target.value}`
		);

		const body = await movies.json();
		setMovies(body);
		setIsLoading(false);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledSearch
				placeholder="Search for movies"
				type="text"
				value={value}
				onChange={handleChange}
			/>
			<StyledButton type="submit">
				{isLoading ? <span>...</span> : <span>Search</span>}
			</StyledButton>
		</StyledForm>
	);
};
// );

const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 2fr 1fr;
	justify-content: space-around;
	height: 40px;
	max-width: 400px;
	margin: 40px auto;

	@media (max-width: 768px) {
		grid-template-columns: 90%;
		grid-template-rows: 1fr 1fr;
		height: auto;
		width: 100%;
		margin: 40px auto 20px;
	}
`;

const StyledSearch = styled.input`
	padding: 0 10px;
	background-color: #ccc;
	border: none;
	border-radius: 5px;

	@media (max-width: 768px) {
		height: 40px;
		margin-bottom: 20px;
	}
`;

const StyledButton = styled.button`
	width: 100px;
	margin-left: 20px;
	border-radius: 5px;
	background-color: #003366;
	color: white;
	border: none;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 768px) {
		height: 40px;
		margin: 0;
		justify-self: center;
	}
`;
