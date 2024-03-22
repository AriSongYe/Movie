import './App.css';
import {useState, useEffect} from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.1&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    console.log(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();  
  }, [])
  return (
    <div>
      {loading ? <h1>Loading...</h1> : <div>
        {movies.map((movie)=>(
          <div key={movie.id}>
            <img src={movie.medium_cover_image}></img>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres && movie.genres.map(g => <li key={g}>{g}</li>)}
            </ul>
          </div>
        ))}
        </div>}
    </div>
  );
}

export default App;
