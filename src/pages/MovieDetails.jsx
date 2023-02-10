import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backBtn = location.state?.from ?? '/movies';

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        console.log(data);
        setMovieData(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(backBtn);
  };

  if (!movieData) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <h1>Movie Details</h1>
      <GoBackButton onClick={handleGoBack} />
      <MovieInfo
        url={movieData.poster_path}
        tag={movieData.tagline}
        title={movieData.title}
        genres={movieData.genres}
        view={movieData.overview}
        budget={movieData.budget}
      />
      <nav>
        <NavLink to="cast" state={{ from: location.state.from }}>
          CAST
        </NavLink>
        <NavLink to="reviews" state={{ from: location.state.from }}>
          REVIEWS
        </NavLink>
      </nav>
      <Suspense>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};
export default MovieDetails;
