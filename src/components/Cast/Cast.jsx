import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import { BASE_IMG_URL } from 'services/constants';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const defaultImg =
    'http://hi-news.pp.ua/uploads/posts/2016-11/scho-oznachaye-smayl-mavpochka-z-zakritimi-ochima-v-yakih-situacyah-yogo-vikoristovuvati_192.jpeg';

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        console.log(data);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  if (cast.length === 0) {
    return (
      <div>
        <h1>This movie does't have cast</h1>
      </div>
    );
  }

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.cast_id}>
          <img
            src={
              actor.profile_path
                ? BASE_IMG_URL + actor.profile_path
                : defaultImg
            }
            alt={actor.original_name}
          />
          <h2>{actor.name}</h2>
          <p>{actor.character}</p>
          <p>{actor.popularity}</p>
        </li>
      ))}
    </ul>
  );
};

