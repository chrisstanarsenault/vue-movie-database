<template>
  <form @submit.prevent="search(val)" >
    <input placeholder="Search for a movie" type="search" v-model="val"/>
    <button>Search</button>
  </form>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import searchForMovie from '@/services/searchForMovies';

export default defineComponent({
  name: 'Searchbar',
  setup() {
    const val = ref<string>('');

    const search = (movieQuery: string): void => {
      searchForMovie(movieQuery);
      val.value = '';
    };

    return {
      search, val
    };
  }
});
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
}

input {
width: 20rem;
font-family: 'Raleway';
font-size: 1.3rem;
height: 2.5rem;
border-radius: 10px;
border-color: #e4d03a;
background: inherit;
color: #f55959;
transition: all .18s ease-out;
padding: 1.3rem 1rem;
}

input:focus, input:hover {

  transform: scale
}

button {
  background: #f55959;
  margin-left: 10px;
  padding: 1rem;
  border-radius: 20px;
  border: none;
  color: white;
  cursor: pointer;
  transition: all .2s ease-out
}

button:hover {
  background: #f14040;
  transform: scale(1.1);
}
</style>
