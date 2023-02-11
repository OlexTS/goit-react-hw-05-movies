import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { fetchMovieDetails } from 'services/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Loader } from 'components/Loader/Loader';

const Spinner = styled.h1`
  text-align: center;
`;

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
        <Spinner>
          <Loader />
        </Spinner>
      </div>
    );
  }
  return (
    <div>
      <GoBackButton onClick={handleGoBack} />
      <MovieInfo
        url={movieData.poster_path}
        tag={movieData.tagline}
        title={movieData.title}
        genres={movieData.genres}
        view={movieData.overview}
        budget={movieData.budget}
      />
    </div>
  );
};
export default MovieDetails;
