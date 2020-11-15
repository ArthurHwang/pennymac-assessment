import styled from 'styled-components';

export const Search = ({ onSubmit, onChange, input }) => (
	<StyledForm onSubmit={onSubmit}>
		<StyledSearch
			placeholder='Enter your query'
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
	width: 400px;
	margin: 0 auto;
`;

const StyledSearch = styled.input`
	padding: 0 10px;
	background-color: #ccc;
	border: none;
	border-radius: 5px;
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
`;
