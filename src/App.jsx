import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='movies-container'>
				<MovieCard />
			</div>
		</div>
	);
}

export default App;
