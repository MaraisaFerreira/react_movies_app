import { useRef } from 'react';
import '../styles/Header.css';

const SEARCH_URL_BASE =
	'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const Header = ({ searchMovies }) => {
	const inputRef = useRef();

	const search = (event) => {
		event.preventDefault();

		if (inputRef.current.value != '') {
			const SEARCH_URL = `${SEARCH_URL_BASE}${inputRef.current.value}"`;
			searchMovies(SEARCH_URL);
		}
	};

	return (
		<div className='header'>
			<div className='logo'>
				<img src='src\assets\imgs\logo.png' alt='Logo' />
			</div>
			<div>
				<form action='GET' onSubmit={search}>
					<input
						ref={inputRef}
						className='search'
						type='text'
						placeholder='Search'
					/>
				</form>
			</div>
		</div>
	);
};

export default Header;
