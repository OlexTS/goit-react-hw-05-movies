import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bb60805928e986df13f7a98c4acc6577';

export const fetchTrendingMovies = async (page) => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}&page=${page}`);

  return response.data;
};

export const fetchSearchQuery = async (query, page) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );

  return response.data;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const fetchMovieCredits = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data.results;
};
