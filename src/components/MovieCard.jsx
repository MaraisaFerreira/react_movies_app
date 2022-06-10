import '../styles/MovieCard.css';

const BANNER_URL_BASE = 'https://image.tmdb.org/t/p/w1280';

const MovieCard = ({ list }) => {
	const movies = list.map((movie) => (
		<div className='movie-card' key={movie.id}>
			<img
				src={BANNER_URL_BASE + movie.poster_path}
				alt={movie.title}
				className='movie-banner'
			/>
			<div className='movie-info'>
				<h3>{movie.title}</h3>
				<span
					className={
						movie.vote_average >= 7
							? 'green'
							: movie.vote_average >= 5
							? 'orange'
							: 'red'
					}
				>
					{movie.vote_average}
				</span>
				<div className='overview'>
					<h3>Overview</h3>
					<p>{movie.overview}</p>
				</div>
			</div>
		</div>
	));
	return movies;
};

export default MovieCard;
