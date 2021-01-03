<template>
  <div class="genres">
    <Genres :genres="genres.genres" @getId="getId" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Genres from '@/components/Genres.vue';

export default defineComponent({
  name: 'GenreSidebar',
  props: ['genres', 'getGenreId'],
  components: {
    Genres,
  },
  setup(props, context) {
    let id = null;
    const sendGenreId = (id: number) => {
      context.emit('getGenreId', id);
    };

    const getId = (gid: number) => {
      id = gid;
      sendGenreId(id);
    };
    return {
      sendGenreId,
      getId,
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
  .genres {
    width: 15%;
    display: flex;
    justify-content: center;
  }
</style>
