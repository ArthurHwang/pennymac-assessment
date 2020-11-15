import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const Nav = () => (
	<StyledNav>
		<Router>
			<Link to='/'>Show Finder</Link>
		</Router>
	</StyledNav>
);

const StyledNav = styled.nav`
	height: 60px;
	background-color: #003366;
	padding-left: 50px;
	display: flex;
	align-items: center;

	a {
		text-decoration: none;
		color: white;
		font-weight: 700;
		font-size: 25px;

		&:visited {
			color: white;
		}

		&:hover {
			color: orange;
		}
	}
`;
