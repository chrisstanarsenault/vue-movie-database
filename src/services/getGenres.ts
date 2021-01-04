import axios from 'axios';
import createStore from '@/store/index';

async function getGenres() {
  const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_MOVIE_API_KEY}&language=en-US
`);
  createStore.dispatch('updateGenres', response.data.genres);
}

export default getGenres;
