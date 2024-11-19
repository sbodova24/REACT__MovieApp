import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieCard } from '../components/MovieCard/MovieCard';
import MovieDetails from '../components/MovieDetails/MovieDetails';

export default function MovieViews() {
  const [movies, setMovies] = useState([]);

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
  }, []);

  return (
    <>
      <h1 className="text-center my-4">Popular Movies</h1>
      <div className="container mt-4">
        <div className="row">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p className="text-center">Loading...</p>

          )}
        </div>
        {/*<Route path="/movie/:id" element={<MovieDetails movies={movies} />} />*/}
        <h1>PUSH INTO MASTER</h1>
      </div>
    </>
  );
}
