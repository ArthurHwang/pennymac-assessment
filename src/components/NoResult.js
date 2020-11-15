import styled from 'styled-components';

export const NoResult = () => (
	<StyledNoResult>
		No movies found. Please modify your query and try again.
	</StyledNoResult>
);

const StyledNoResult = styled.div`
	width: 80%;
	background-color: orange;
	margin: 0 auto;
	margin-top: 20px;
	padding: 20px;
	text-align: center;
	font-weight: 700;
`;
