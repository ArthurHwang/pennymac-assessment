import styled from "styled-components";
import { EpisodeCard } from "../components/EpisodeCard";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export const EpisodePage = (props) => {
	const [listing, setListing] = useState({});
	const [episodes, setEpisodes] = useState([]);
	const [maxSeasons, setMaxSeasons] = useState(0);
	const [currentSeason, setCurrentSeason] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const id = props.match.params.id;

			try {
				const [listingFetch, episodesFetch] = await Promise.all([
					fetch(`https://api.tvmaze.com/shows/${id}`),
					fetch(`https://api.tvmaze.com/shows/${id}/episodes`),
				]);

				const [listingBody, episodeBody] = await Promise.all([
					listingFetch.json(),
					episodesFetch.json(),
				]);

				setListing(listingBody);
				setEpisodes(episodeBody);

				// loop through episode HTTP response listing and find maximum number of seasons
				let maximumSeasons = 0;

				episodeBody.forEach((episode) => {
					maximumSeasons = Math.max(episode.season);
				});

				setMaxSeasons(maximumSeasons);
				setIsLoading(false);
			} catch (err) {
				alert(err);
			}
		}
		fetchData();
	}, []);

	const handleChange = ({ target: { value } }) => {
		setCurrentSeason(parseInt(value));
	};

	let imageCheck = !listing.image
		? "https://static.thenounproject.com/png/75231-200.png"
		: listing.image.original;

	return (
		<StyledEpisodes>
			<StyledInfo>
				{isLoading ? (
					<div className="loader">
						<ClipLoader />
					</div>
				) : (
					<img src={imageCheck} alt="movie" />
				)}
				<h2>{listing.name}</h2>
				<div
					dangerouslySetInnerHTML={{ __html: listing.summary }}
				></div>
				<span>
					<b>Premiered:</b> {listing.premiered}
				</span>
				<br />
				<span>
					<b>Genre:</b>{" "}
					{!listing.genres ? "" : listing.genres.join(", ")}
				</span>
			</StyledInfo>

			<StyledSeasons>
				<select onChange={handleChange}>
					{Array.from({ length: maxSeasons }).map((_el, idx) => (
						<option key={idx} value={`${idx + 1}`}>{`Season ${
							idx + 1
						}`}</option>
					))}
				</select>
				<ul>
					{episodes.map((episode) => {
						if (episode.season === currentSeason) {
							return (
								<EpisodeCard
									props={episode}
									listing={listing}
									key={episode.id}
								/>
							);
						}
					})}
				</ul>
			</StyledSeasons>
		</StyledEpisodes>
	);
};

const StyledEpisodes = styled.div`
	display: grid;
	grid-template-columns: 0.4fr 1fr;
	width: 75%;
	margin: 0 auto;
	justify-content: center;
	padding-bottom: 40px;
	grid-gap: 20px;

	@media (max-width: 768px) {
		display: block;
		margin: 0;
		width: 90%;
		padding: 0 20px;
	}
`;

const StyledInfo = styled.div`
	width: 100%;

	.loader {
		display: flex;
		justify-content: center;
	}

	h2 {
		color: #003366;
	}

	p {
		color: grey;
	}

	img {
		max-height: 500px;
		width: 100%;
		object-fit: cover;
	}
`;

const StyledSeasons = styled.div`
	width: 100%;

	h2 {
		overflow: hidden;
		white-space: nowrap;
	}

	ul {
		padding-left: 20px;

		@media (max-width: 768px) {
			padding-left: 0;
		}
	}

	select {
		margin-left: 20px;
		width: 120px;
		height: 40px;
		border: none;
		border-radius: 8px;
		background-color: #ccc;
		padding-left: 10px;

		@media (max-width: 768px) {
			margin-top: 20px;
			margin-left: 0;
		}
	}
`;
