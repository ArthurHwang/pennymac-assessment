import styled from "styled-components";
import { Movies } from "../components/Movies";
import { NoResult } from "../components/NoResult";

export const HomePage = ({ movies, noResult }) => {
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
	height: auto;
	padding: 20px 40px;
	background-color: #ccc;

	@media (max-width: 768px) {
		padding: 20px 0;
	}
`;

const StyledListing = styled.div`
	padding: 20px;
	height: auto;
	background-color: white;
`;
