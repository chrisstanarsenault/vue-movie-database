import axios from 'axios';
import createStore from '@/store/index';

const searchForMovies = async (movie: string): Promise<void> => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_MOVIE_API_KEY}&query=${movie}`
  );
  createStore.dispatch('updateMovies', response.data.results);
};

export default searchForMovies;
