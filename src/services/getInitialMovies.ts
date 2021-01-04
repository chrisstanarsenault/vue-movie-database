import axios from 'axios';
import createStore from '@/store/index';

const getInitialMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );
  createStore.dispatch('updateMovies', response.data.results);
};

export default getInitialMovies;
