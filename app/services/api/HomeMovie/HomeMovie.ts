import axios from 'axios';

const API_KEY = '4ad3a699';
const BASE_URL = 'https://www.omdbapi.com';

export const fetchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/?s=${query}&apikey=${API_KEY}`);
    return response.data.Search;  
  } catch (error) {
    console.error("Error fetching movies: ", error);
    return [];
  }
};
