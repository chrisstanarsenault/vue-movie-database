<template>
  <Suspense>
    <template #default>
      <div class="full-container">
        <div class="header-container">
          <Header />
        </div>
        <div class="genre-movies-container">
          <GenreSidebar />
          <Movies />
        </div>
      </div>
    </template>
    <template #fallback>
      <h1>Test</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';

// import getGenres from '@/services/getGenres';
import getInitialMovies from '@/services/getInitialMovies';

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
    const store = useStore();

    onMounted(() => {
      getInitialMovies();
    });

    return { getInitialMovies, store };
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
