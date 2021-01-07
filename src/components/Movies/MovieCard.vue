<template>
  <div class="movie-card">
    <div class="rating">
      <i class="fas fa-star"></i>{{ movie.vote_average.toFixed(1) }}
    </div>
    <img :src="imgUrl + movie.poster_path" />
    <div class="sub-info">
      <p>{{ movie.original_title }}</p>
      <p v-if="movie.release_date">
        {{ format(new Date(movie.release_date), 'MMM do, yyyy') }}
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { format } from 'date-fns';

export default defineComponent({
  name: 'MovieCard',
  props: ['movie'],
  setup() {
    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    const log = (m: any): any => console.log(m);

    return {
      imgUrl,
      log,
      format,
    };
  },
});
</script>

<style scoped>
  .movie-card {
    position: relative;
    width: 15rem;
  }

  img {
    width: inherit;
    height: 20rem;
    border-radius: 10px;
  }

  .sub-info {
    margin-bottom: 2rem;
  }
  .sub-info p {
    padding-left: 0.5rem;
    margin-bottom: 0;
    font-size: 1.2rem;
  }

  .sub-info p:nth-child(1) {
    margin-top: 0.5rem;
    font-weight: bold;
  }

  .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    background-color: #e4d03a;
    color: white;
    width: 2.5rem;
    padding: 0.3rem 0.5rem;
    top: -7px;
    right: -2px;
    border-radius: 20px;
    box-shadow: 5px 5px 20px 1px rgba(0, 0, 0, 0.466);
  }

  .fa-star {
    font-size: 10px;
  }
</style>
