import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';

const API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(API_URL)
			.then((resp) => resp.json())
			.then((json) => setMovies(json.results));
	}, []);

	const handleSearchMovies = (url) => {
		fetch(url)
			.then((resp) => resp.json())
			.then((json) => setMovies(json.results));
	};

	return (
		<div className='App'>
			<Header searchMovies={handleSearchMovies} />
			<div className='movies-box'>
				<MovieCard list={movies} />
			</div>
		</div>
	);
}

export default App;
