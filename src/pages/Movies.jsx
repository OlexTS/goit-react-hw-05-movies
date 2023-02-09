import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchQuery } from 'services/api';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    (async () => {
      try {
        const data = await fetchSearchQuery(searchQuery);
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [searchQuery]);

  const handleSearchMovies = query => {
    setSearchParams({ query });
  };
  return (
    <div>
      <h1>Movies</h1>
      <SearchMovies onSubmit={handleSearchMovies} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
