import '../styles/Header.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>
				<img src='src\assets\imgs\logo.png' alt='Logo' />
			</div>
			<div>
				<form action='GET'>
					<input className='search' type='text' placeholder='Search' />
				</form>
			</div>
		</div>
	);
};

export default Header;
