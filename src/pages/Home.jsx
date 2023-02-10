import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return <div>{isLoading ? <Loader /> : <MoviesList movies={movies} />}</div>;
};

export default Home;
