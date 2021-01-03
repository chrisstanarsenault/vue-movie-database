<template>
  {{ log(genres) }}
  <ul>
    <li
      v-for="genre in store.state.genres"
      :key="genre.name"
      @click="sendGenreId(genre.id)"
    >
      {{ genre.name }}
    </li>
  </ul>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Genres',
  props: ['getGenreId'],
  setup(props, context) {
    const store = useStore();
    const sendGenreId = (id: number) => {
      context.emit('getId', id);
    };

    return {
      sendGenreId,
      store,
      useStore,
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
