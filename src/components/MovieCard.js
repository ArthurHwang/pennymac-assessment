import styled from 'styled-components';

export const MovieCard = ({ name, image, summary, url }) => {
	console.log(image);

	// Some API image results return null that break application
	// Need to check for null and replace with placeholder

	let imageCheck =
		image === null
			? 'https://static.thenounproject.com/png/75231-200.png'
			: image.medium;

	return (
		<StyledCard>
			<a href={url} target='_blank'>
				<img src={imageCheck} title={name} />
			</a>
			<StyledDescription>
				<h2>{name}</h2>
				<div dangerouslySetInnerHTML={{ __html: summary }}></div>
				<StyledButton>View Episodes</StyledButton>
			</StyledDescription>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	max-width: 1200px;
	background-color: #ccc;
	margin: 20px auto;
	display: grid;
	grid-template-columns: 0.4fr 1.5fr;
	border: 2px solid grey;

	a {
		height: 100%;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;

const StyledDescription = styled.div`
	padding: 0 40px 30px;

	h2 {
		margin: 20px 0;
		font-size: 40px;
		color: #003366;
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
