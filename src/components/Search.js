import styled from 'styled-components';

export const Search = ({ onSubmit, onChange, input }) => (
	<StyledForm onSubmit={onSubmit}>
		<StyledSearch
			placeholder='Search for movies'
			type='text'
			value={input}
			onChange={onChange}
		/>
		<StyledButton type='submit'>Search</StyledButton>
	</StyledForm>
);

const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 2fr 1fr;
	justify-content: space-around;
	height: 40px;
	max-width: 400px;
	margin: 0 auto;

	@media (max-width: 768px) {
		grid-template-columns: 90%;
		grid-template-rows: 1fr 1fr;
		height: auto;
		width: 100%;
		margin: 0 auto;
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
