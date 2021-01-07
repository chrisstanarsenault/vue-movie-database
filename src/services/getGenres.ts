import axios from 'axios';
import createStore from '@/store/index';

interface Genres {
  id: number;
  name: string;
}

async function getGenres(): Promise<object | [Genres]> {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_MOVIE_API_KEY}&language=en-US
`);
    return createStore.dispatch('updateGenres', response.data.genres);
  } catch (err) {
    return err;
  }
}

export default getGenres;
