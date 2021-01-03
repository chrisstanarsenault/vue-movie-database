<template>
  <Suspense>
    <template #default
      ><div class="app-container">
        <FullMovieContainer /></div
    ></template>
    <template #fallback><h1>Loading</h1></template>
  </Suspense>
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
