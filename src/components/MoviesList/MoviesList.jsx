import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
