import '../styles/Header.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>
				<img src='src\assets\imgs\logo.png' alt='Logo' />
			</div>
			<div>
				<input className='search' type='text' placeholder='Search' />
			</div>
		</div>
	);
};

export default Header;
