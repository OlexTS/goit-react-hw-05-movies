import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';
import { fetchSearchQuery } from 'services/api';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Spinner = styled.h1`
  text-align: center;
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchSearchQuery(searchQuery);
        if (!data.length) {
          return toast.error('No movies found! Please try again!');
        }
        setMovies(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchQuery]);

  const handleSearchMovies = query => {
    setSearchParams({ query });
  };
  return (
    <div>
      <SearchMovies onSubmit={handleSearchMovies} />
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

export default Movies;
