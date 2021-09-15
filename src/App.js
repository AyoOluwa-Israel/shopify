import React,{ useState, useEffect} from 'react'
import './App.css';
import MovieList from './components/MovieList';
import SearchForm from './components/SearchForm';

function App() {

  const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=d710b06d&s='
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${query}`)
      const data = await response.json();
      console.log(data);
      setMovies(data.results)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovie()
  }, [query])
    
    
    const searchMovies = async (e) => {
        e.preventDefault();
        }


  


  return (
    <div className="App">
      <SearchForm searchMovies={searchMovies} query={query} setQuery={setQuery} movies={movies} />
      
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
