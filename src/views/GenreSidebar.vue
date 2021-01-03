<template>
  <div class="genres">
    <Genres @getId="getId" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import Genres from '@/components/Genres.vue';

export default defineComponent({
  name: 'GenreSidebar',
  props: ['getGenreId'],
  components: {
    Genres,
  },

  setup(props, context) {
    const store = useStore();
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
      useStore,
      store,
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
