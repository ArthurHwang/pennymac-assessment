import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = () => (
	<StyledNav>
		<Link to='/'>Show Finder</Link>
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
