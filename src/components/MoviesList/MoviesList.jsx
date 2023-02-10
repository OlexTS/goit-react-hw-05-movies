import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BASE_IMG_URL } from 'services/constants';
import { ListMovie, Item, Title, Section, MovieTitle } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return ( <Section><Title>Trending movies today</Title>
    <ListMovie>
      {movies.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <img src={BASE_IMG_URL + poster_path} alt="movie" />
            <MovieTitle>{title}</MovieTitle>
          </NavLink>
        </Item>
      ))}
    </ListMovie></Section>
    
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
