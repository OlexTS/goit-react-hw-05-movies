import PropTypes from 'prop-types';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Title,
  SearchMovie,
  SearchForm,
  SearchInput,
  ButtonLabel,
  SearchFormBtn,
} from './SearchMovies.styled';

export const SearchMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a valid query');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchMovie>
      <Title>Search Movies</Title>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Please enter your query..."
          autoFocus
        />
        <SearchFormBtn type="submit">
          <FcSearch size={30} />
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormBtn>
      </SearchForm>
    </SearchMovie>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
