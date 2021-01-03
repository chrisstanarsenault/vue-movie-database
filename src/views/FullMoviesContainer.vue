<template>
  <div class="full-container">
    <div class="header-container">
      <Header />
    </div>
    <div class="genre-movies-container">
      <GenreSidebar :genres="genres" @getGenreId="getMoviesByGenre" />
      <Movies :movies="movies" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured, onMounted } from 'vue';
import axios from 'axios';

import Header from '@/views/Header.vue';
import GenreSidebar from '@/views/GenreSidebar.vue';
import Movies from '@/views/Movies.vue';

export default defineComponent({
  name: 'FullMovieContainer',
  components: {
    Header,
    GenreSidebar,
    Movies,
  },
  setup() {
    const genres = ref([]);
    const movies = ref([]);
    const getGenres = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=a1d1f9d8d405b856379b76511512345c&language=en-US
`);
      genres.value = response.data;
    };
    const getMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=a1d1f9d8d405b856379b76511512345c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      );

      movies.value = response.data.results;
    };
    const getMoviesByGenre = async (id: number) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=a1d1f9d8d405b856379b76511512345c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
      );
      movies.value = response.data.results;
    };

    onMounted(() => {
      getGenres();
      getMovies();
    });

    return { genres, getGenres, movies, getMovies, getMoviesByGenre };
  },
});
</script>

<style scoped>
  .full-container {
    width: 80%;
    background-color: #094353;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.466);
  }

  .genre-movies-container {
    display: flex;
    margin-top: 3rem;
  }
</style>
