import styled from 'styled-components';
import { MovieCard } from './MovieCard';

export const Movies = ({ movies }) => {
	return (
		<StyledMovies>
			{movies.map(({ show }) => (
				<MovieCard
					name={show.name}
					image={show.image}
					summary={show.summary}
					url={show.url}
					id={show.id}
					key={show.id}
				/>
			))}
		</StyledMovies>
	);
};

const StyledMovies = styled.div`
	margin-top: 30px;
`;
