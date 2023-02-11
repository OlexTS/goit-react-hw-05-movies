import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import { BASE_IMG_URL, DEFAULT_IMG_URL } from 'services/constants';
import { List, Title, Item, Error } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  if (cast.length === 0) {
    return (
      <div>
        <Error>This movie doesn't have cast</Error>
      </div>
    );
  }

  return (
    <>
      <Title>CAST</Title>
      <List>
        {cast.map(actor => (
          <Item key={actor.cast_id}>
            <img
              src={
                actor.profile_path
                  ? BASE_IMG_URL + actor.profile_path
                  : DEFAULT_IMG_URL
              }
              alt={actor.original_name}
            />
            <h2>{actor.name}</h2>
            <p>{actor.character}</p>
            <p>{actor.popularity}</p>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Cast;
