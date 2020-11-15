import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
export const EpisodeCard = ({ props, listing }) => {
	console.log(props);
	return (
		<StyledEpisode>
			<StyledEpisodeNumber>{props.number}</StyledEpisodeNumber>
			<StyledEpisodeInfo>
				<StyledLink href={props.url} target='_blank' rel='noreferrer'>
					<h2>{props.name}</h2>
					<StyledInfo>
						<span>
							<BsStarFill className='star' />
							{listing.rating.average === null
								? null
								: listing.rating.average.toString()}
						</span>{' '}
						<span className='divider'>|</span>
						<span>Airdate: {props.airdate}</span>
					</StyledInfo>
				</StyledLink>
			</StyledEpisodeInfo>
		</StyledEpisode>
	);
};

const StyledInfo = styled.div`
	color: grey;
	.star {
		position: relative;
		top: 1.5px;
		margin-right: 10px;
		fill: gold;
	}
	.divider {
		margin: 0 10px;
		color: grey;
	}
`;

const StyledEpisode = styled.div`
	display: grid;
	grid-template-columns: 0.1fr 1fr;
	margin-bottom: 20px;
	grid-gap: 20px;
	width: fit-content;
`;

const StyledEpisodeNumber = styled.div`
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #003366;
	color: white;
	font-weight: 700;
	font-size: 20px;
	border-radius: 8px;
`;

const StyledEpisodeInfo = styled.div`
	h2 {
		margin: 0;
	}
`;

const StyledLink = styled.a`
	text-decoration: none;
	color: #003366;
	&:visited {
		color: #003366;
	}

	&:hover {
		color: orange;
	}
`;
