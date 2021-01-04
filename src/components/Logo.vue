<template>
  <div @click="getInitialMovies">The Vuevie DB</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import getInitialMovies from '@/services/getInitialMovies';

export default defineComponent({
  name: 'Logo',
  setup() {
    return {
      getInitialMovies,
    };
  },
});
</script>

<style scoped>
  div {
    border: 3px solid #f55949;
    color: #f55949;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0.6rem;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.19s ease-out;
  }

  div:hover {
    background-color: #f55959;
    color: white;
    transform: scale(1.05) rotate(-2deg);
  }
</style>
