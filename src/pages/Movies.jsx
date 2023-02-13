import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';
import { fetchSearchQuery } from 'services/api';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { LoadMore } from 'components/LoadMore/LoadMore';

const Spinner = styled.h1`
  text-align: center;
`;
const Load = styled.div`
  text-align: center;
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');


  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchSearchQuery(searchQuery, page);
        if (!data.results.length) {
          return toast.error('No movies found! Please try again!');
        }
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
  }, [page, searchQuery]);

  const handleSearchMovies = query => {
    setSearchParams({ query });
  };

  const loadNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };
  if (movies) {
    return (
    <div>
        <SearchMovies onSubmit={handleSearchMovies} />
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
            </Load>
          )
        )}
    </div>
  );}
  
};

export default Movies;
