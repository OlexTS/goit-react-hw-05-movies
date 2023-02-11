import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import { Title, List, Item, Error, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMovieReviews(movieId, {});
        setReviewsMovie(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  if (reviewsMovie.length === 0) {
    return (
      <div>
        <Error>This movie doesn't have reviews</Error>
      </div>
    );
  }

  return (
    <>
      <Title>REVIEWS</Title>
      <List>
        {reviewsMovie.map(review => (
          <Item key={review.id}>
            <h2>
              Author: {review.author}
              <p>
                Description: <Text>{review.content}</Text>
              </p>
            </h2>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Reviews;
