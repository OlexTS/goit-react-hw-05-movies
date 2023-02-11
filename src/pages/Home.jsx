import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { fetchTrendingMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  padding: 20px;
`;
const Spinner = styled.h1`
  text-align: center;
`;

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

  return (
    <div>
      <Title>Trending movies today</Title>
      {isLoading ? (
        <Spinner>
          <Loader />
        </Spinner>
      ) : (
        <MoviesList movies={movies} />
      )}
    </div>
  );
};

export default Home;
