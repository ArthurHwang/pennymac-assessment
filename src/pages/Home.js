import styled from 'styled-components';
import { Movies } from '../components/Movies';
import { NoResult } from '../components/NoResult';

export const HomePage = ({ movies, noResult }) => {
	console.log(noResult);
	return (
		<StyledWrapper>
			<StyledContainer>
				<StyledListing>
					{noResult ? <NoResult /> : <Movies movies={movies} />}
				</StyledListing>
			</StyledContainer>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
`;

const StyledContainer = styled.div`
	background-color: grey;
	height: auto;
	padding: 20px 40px;
	background-color: #ccc;
`;

const StyledListing = styled.div`
	padding: 20px;
	height: auto;
	background-color: white;
`;