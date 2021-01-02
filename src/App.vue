<template>
  <div class="app-container">
    <FullMovieContainer />
  </div>
</template>

<script>
import FullMovieContainer from '@/views/FullMoviesContainer.vue';

export default {
  components: {
    FullMovieContainer,
  },
};
</script>

<style>
  html {
    background-color: #f8da8b;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  .app-container {
    display: flex;
    justify-content: center;
  }
</style>
