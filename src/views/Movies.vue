<template>
  <div class="all-movies">
    <MovieCard
      v-for="movie in store.state.movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import MovieCard from '@/components/MovieCard.vue';
import getInitialMovies from '@/services/getInitialMovies';

export default defineComponent({
  name: 'Movies',
  components: {
    MovieCard,
  },
  async setup() {
    const store = useStore();
    await getInitialMovies();

    return {
      store,
      getInitialMovies,
    };
  },
  methods: {
    log(m: any) {
      return console.log(m);
    },
  },
});
</script>

<style scoped>
  .all-movies {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: space-between;
    background-color: #1186a7;
    width: 85%;
    color: #e4d03a;
  }
</style>
