import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import { BASE_IMG_URL } from 'services/constants';

 const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const defaultImg =
    'http://hi-news.pp.ua/uploads/posts/2016-11/scho-oznachaye-smayl-mavpochka-z-zakritimi-ochima-v-yakih-situacyah-yogo-vikoristovuvati_192.jpeg';

   useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const data = await fetchMovieCredits(movieId, {
          signal: controller.signal,
        });
        setCast(data);
      } catch (error) {
        console.log(error);
      }
     })();
      return () => 
      controller.abort();
  }, [movieId]);

  if (cast.length === 0) {
    return (
      <div>
        <p>This movie doesn't have cast</p>
      </div>
    );
  }

  return (
    <ul>
      <h1>CAST</h1>
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

export default Cast;