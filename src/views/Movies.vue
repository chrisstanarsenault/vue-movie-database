<template>
  <div class="movie-container">
    <h1 v-if="store.state.movies.length === 0">No movies found....</h1>
    <div v-if="Object.keys(movie).length" class="individual-movie">
      <Movie :movie="movie" @reset="resetAndHome"/>
    </div>
    <div v-else class="all-movies">
      <MovieCard
      v-for="movie in store.state.movies"
      :key="movie.id"
      :movie="movie"
      @click="getMovie(getMovieID(movie.id))"

    />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';

import MovieCard from '@/components/Movies/MovieCard.vue';
import Movie from '@/views/Movie.vue';

import getInitialMovies from '@/services/getInitialMovies';
// import getMovie from '@/service/getInitialMovies';

export default defineComponent({
  name: 'Movies',
  components: {
    MovieCard,
    Movie
  },
  async setup() {
    const store = useStore();
    const movie = ref<object>({});

    const getMovie = async (cb: number) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${cb}?api_key=${process.env.VUE_APP_MOVIE_API_KEY}&language=en-US`
      );
      movie.value = response.data;
    };
    const getMovieID = (id: number): number => id;

    const resetAndHome = () => {
      movie.value = {};
    };
    await getInitialMovies();

    return {
      store,
      getInitialMovies,
      getMovieID,
      getMovie,
      movie,
      resetAndHome
    };
  },
});
</script>

<style scoped>
  .movie-container {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: center;
    background-color: #1186a7;
    width: 85%;
    color: #e4d03a;
  }
  .all-movies {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: space-between;
    background-color: #1186a7;
    width: 85%;
    color: #e4d03a;
  }

  .individual-movie {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
</style>
