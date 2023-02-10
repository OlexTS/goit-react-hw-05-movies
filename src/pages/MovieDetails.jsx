import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { BASE_IMG_URL } from 'services/constants';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieData(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [movieId]);
    
  if (!movieData) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>MovieDetails</h1>
      <button type="button">GO BACK</button>
      <img
        src={BASE_IMG_URL + movieData.poster_path}
        alt={movieData.title}
        width='300'
      />
      <NavLink to="cast">CAST</NavLink>
      <NavLink to="reviews">REVIEWS</NavLink>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
