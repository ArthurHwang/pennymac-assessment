import styled, { isStyledComponent } from 'styled-components';

export const Search = () => (
	<StyledContainer>
		<StyledSearch placeholder='Enter to search' />
		<StyledButton>Search</StyledButton>
	</StyledContainer>
);

const StyledContainer = styled.div`
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
`;

const StyledButton = styled.button`
	width: 100px;
	margin-left: 20px;
	border-radius: 10px;
	background-color: #003366;
	color: white;
	border: none;

	&:hover {
		cursor: pointer;
	}
`;

// const StyledWrapper = styled.div``;
