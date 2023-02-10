import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const data = await fetchMovieReviews(movieId, {
          signal: controller.signal,
        });
        setReviewsMovie(data);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => 
      controller.abort();
    
  }, [movieId]);

  if (reviewsMovie.length === 0) {
    return (
      <div>
        <p>This movie doesn't have reviews</p>
      </div>
    );
  }

  return (
    <ul>
      <h1>Rewiews</h1>
      {reviewsMovie.map(review => (
        <li key={review.id}>
          <h2>
            Author: {review.author}
            <p>Description: {review.content}</p>
          </h2>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
