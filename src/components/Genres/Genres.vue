<template>
  <ul>
    <li
      v-for="genre in store.state.genres"
      :key="genre.name"
      @click="getMoviesByGenre(genre.id)"
    >
      {{ genre.name }}
    </li>
  </ul>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

import getMoviesByGenre from '@/services/getMoviesByGenre';
import getGenres from '@/services/getGenres';

export default defineComponent({
  name: 'Genres',
  async setup() {
    const store = useStore();
    getGenres();
    return {
      store,
      getMoviesByGenre,
      getGenres,
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
  ul {
    list-style: none;
    padding: 0;
  }
  ul li {
    font-size: 1.5rem;
    color: #e4d03a;
    padding: 1rem;
    cursor: pointer;
    transition: background 0.7s ease-out;
  }

  ul li:hover {
    background: #0b5164;
  }

  ul li:nth-child(n + 2) {
    margin-top: 1rem;
  }
</style>
