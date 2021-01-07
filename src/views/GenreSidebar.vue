<template>
  <div class="genres">
    <Genres />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import Genres from '@/components/Genres/Genres.vue';

export default defineComponent({
  name: 'GenreSidebar',
  components: {
    Genres,
  },

  setup() {
    const store = useStore();

    return {
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
