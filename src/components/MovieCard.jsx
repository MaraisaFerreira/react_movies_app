import '../styles/MovieCard.css';

const MovieCard = () => {
	return (
		<div className='movie-card'>
			<img
				src='https://images.unsplash.com/photo-1654358557454-4a78eb185e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
				alt='Temp'
				className='movie-banner'
			/>
			<div className='movie-info'>
				<h3>Description</h3>
				<span className='green'>9.1</span>
				<div className='overview'>
					<h3>Overview</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae
						distinctio eligendi non voluptas laborum nisi placeat quam
						consequuntur quisquam, culpa, ea veritatis, facere ipsa? Et id culpa
						natus quaerat!
					</p>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
