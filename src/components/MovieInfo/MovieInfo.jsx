import PropTypes from 'prop-types';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { BASE_IMG_URL, DEFAULT_IMG_URL } from 'services/constants';
import {
  Section,
  Title,
  Container,
  Info,
  MovieTitle,
  Description,
  Text,
  Budget,
  GenresList,
  Genres,
  GenresText,
  Cast,
  Reviews,
  Navi,
} from './MovieInfo.styled';

export const MovieInfo = ({ url, tag, title, genres, view, budget }) => {
  const location = useLocation();

  return (
    <Container>
      <Title>Movie Details</Title>
      <Section>
        <img
          src={url ? BASE_IMG_URL + url : DEFAULT_IMG_URL}
          alt={tag}
          width="350"
        />
        <Info>
          <MovieTitle>{title}</MovieTitle>
          <Description>Overview</Description>
          <Text>{view}</Text>
          <Budget>Budget: {budget}$</Budget>
          <GenresList>
            <Genres>Genres:</Genres>
            {genres.map(genre => (
              <li key={genre.id}>
                <GenresText>{genre.name}</GenresText>
              </li>
            ))}
          </GenresList>
          <Navi>
            <NavLink to="cast" state={{ from: location.state.from }}>
              <Cast>CAST</Cast>
            </NavLink>
            <NavLink to="reviews" state={{ from: location.state.from }}>
              <Reviews>REVIEWS</Reviews>
            </NavLink>
          </Navi>
        </Info>
      </Section>

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

MovieInfo.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  view: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
};
