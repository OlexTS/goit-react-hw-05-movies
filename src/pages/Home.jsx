import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data)
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div>
          <h1>Home</h1>
          <MoviesList movies={movies} />
    </div>
  );
};

export default Home;