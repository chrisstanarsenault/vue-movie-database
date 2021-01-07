import axios from 'axios';
import createStore from '@/store/index';

const getMovie = async (id: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.VUE_MOVIE_APP_API_KEY}&language=en-US`
  );

  createStore.dispatch('updateMovies', response.data.results);
};

export default getMovie;
