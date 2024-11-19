import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, NavLink, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header'; // Adjust the path as needed
import MovieViews from './views/MovieViews';


function App() {
  /*const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=51def6820408da94d7df01a357112de5'
      );
      setMovies(data.results); // Assuming 'results' contains the list of movies
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);*/

  return (
    <div className="App bg-dark text-white">
      <Router>
        <Header />



        <Routes>
          <Route path="/" element={<MovieViews />} />
        </Routes>



        {/*<Routes>
          <Route
            path="/"
            element={
              <main className="container mt-4">

                <div className="row">
                  {movies.length > 0 ? (
                    movies.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))
                  ) : (
                    'Loading...'
                  )}
                </div>
              </main>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>*/}
      </Router>
    </div>
  );
  
}

export default App;
