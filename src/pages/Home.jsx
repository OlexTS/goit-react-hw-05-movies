import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { fetchTrendingMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { ScrollButton } from 'components/ScrollButton/ScrollButton';

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  padding: 20px;
`;
const Spinner = styled.h1`
  text-align: center;
`;

const Load = styled.div`
  text-align: center;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMovies(page);
        setMovies(prevMovies =>
          page === 1 ? data.results : [...prevMovies, ...data.results]
        );
        setTotalImages(data.total_results);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  const loadNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (movies) {
    return (
      <div>
        <Title>Trending movies today</Title>
        {!!movies.length && <MoviesList movies={movies} />}

        {isLoading ? (
          <Spinner>
            <Loader />
          </Spinner>
        ) : (
          movies.length !== 0 &&
          movies.length < totalImages && (
            <Load>
                <LoadMore onLoadMore={loadNextPage} />
                <ScrollButton/>
            </Load>
          )
        )}
      </div>
    );
  }
};

export default Home;
