import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EpisodePage } from "./pages/Episodes";
import { HomePage } from "./pages/Home";
import { Search } from "./components/Search";
import { NoResult } from "./components/NoResult";
import { useState } from "react";

const App = () => {
	const [input, setInput] = useState("");
	const [movies, setMovies] = useState([]);
	const [noResult, setNoResult] = useState(false);

	return (
		<Router>
			<div className="App">
				<Nav />
				<Search
					setMovies={setMovies}
					setNoResult={setNoResult}
					setInput={setInput}
					value={input}
				/>
				<Switch>
					<Route
						path="/"
						exact
						component={() =>
							movies.length ? (
								<HomePage movies={movies} />
							) : (
								noResult && <NoResult />
							)
						}
					/>
					<Route path="/episodes/:id" component={EpisodePage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
