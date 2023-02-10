import PropTypes from 'prop-types';
import { BASE_IMG_URL } from 'services/constants';

export const MovieInfo = ({ url, tag, title, genres, view, budget }) => {
  return (
    <div>
      <img src={BASE_IMG_URL + url} alt={tag} width="400" />
      <div>
        <h2>{title}</h2>
        <h3>Overview</h3>
        <p>{view}</p>
        <p>Budget: {budget}</p>
        <ul>
          Genres:{' '}
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
    url: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    view: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired
}