import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieCard = ({ name, image, summary, url, id }) => {
	// Some API image results return null that break application
	// Need to check for null and replace with placeholder

	let imageCheck =
		image === null
			? "https://static.thenounproject.com/png/75231-200.png"
			: image.original;

	return (
		<StyledCard>
			<a href={url} target="_blank" rel="noreferrer">
				<img src={imageCheck} title={name} alt={name} />
			</a>
			<StyledDescription>
				<h2>{name}</h2>
				<div dangerouslySetInnerHTML={{ __html: summary }}></div>

				<Link to={`/episodes/${id}`}>
					<StyledButton>View Episodes</StyledButton>
				</Link>
			</StyledDescription>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	max-width: 1200px;
	background-color: #eee;
	margin: 20px auto;
	display: grid;
	grid-template-columns: 0.4fr 1.5fr;

	a {
		height: 100%;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	@media (max-width: 768px) {
		grid-template-columns: initial;
		grid-template-rows: 200px 1fr;
	}
`;

const StyledDescription = styled.div`
	padding: 0 40px 30px;

	h2 {
		margin: 20px 0;
		font-size: 40px;
		color: #003366;
	}

	p {
		color: grey;
	}

	@media (max-width: 768px) {
		padding: 0 20px 30px;
	}
`;

const StyledButton = styled.button`
	height: 40px;
	background-color: #003366;
	border: none;
	border-radius: 8px;
	color: white;
	padding: 0 20px;

	&:hover {
		cursor: pointer;
	}
`;
