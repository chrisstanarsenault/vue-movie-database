<template>
  <div class="header-container">
    <div class="movie-title">
      <h1>{{movieTitle}}</h1>
    </div>
    <div>
      <p class="movie-rating">{{movieRating}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'Header',
  props: ['title', 'rating'],
  setup(props) {
    const { title: movieTitle, rating: movieRating } = toRefs(props);

    return { movieTitle, movieRating };
  }
});
</script>

<style scoped>
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #094353b8;
    padding-bottom:15px;
  }

  .movie-title {
    font-size: 1.2rem;
    margin-left: 2rem;
  }

  .movie-title h1 {
  margin-bottom: 0;
  }

  .movie-rating {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    margin-right: 2rem;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 50%;
    border: 5px solid #E4D03A;
    padding: 10px;
  }
</style>
