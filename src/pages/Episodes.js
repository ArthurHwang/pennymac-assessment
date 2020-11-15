import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const EpisodePage = props => {
	const id = props.match.params.id;
	console.log(props);
	console.log(id);

	// handleSeason = () => {};

	useEffect(async () => {
		const listing = await fetch(`https://api.tvmaze.com/shows/${id}`);
		const episodes = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
		const listingBody = await episodes.json();
		const episodeBody = await listing.json();
		console.log(listingBody);
		console.log(episodeBody);
	}, []);

	return <StyledEpisodes></StyledEpisodes>;
};

const StyledEpisodes = styled.div``;
