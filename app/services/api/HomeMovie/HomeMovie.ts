import axios from 'axios';

const API_KEY = 'YOUR_OMDB_API_KEY';
const BASE_URL = `https://www.omdbapi.com`;

export const fetchMovies = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/?s=${query}&apikey=${API_KEY}`);
  return response.data.Search;
};
