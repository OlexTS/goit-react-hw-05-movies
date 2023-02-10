import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchQuery } from 'services/api';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
     const controller = new AbortController();
    if (!searchQuery) {
      return;
    }
    
    (async () => {
      try {
        const data = await fetchSearchQuery(searchQuery, {
          signal: controller.signal,
        });
                setMovies(data);
      } catch (err) {
        console.log(err);
      }
    })();
    return () => 
      controller.abort();
  }, [searchQuery]);

  const handleSearchMovies = query => {
    setSearchParams({ query });
  };
  return (
    <div>
      <h1>Search Movies</h1>
      <SearchMovies onSubmit={handleSearchMovies} />
      {movies.length<1?<Loader/>: <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
