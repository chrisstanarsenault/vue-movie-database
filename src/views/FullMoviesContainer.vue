<template>
  <div class="full-container">
    <Header />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/views/Header.vue';

export default defineComponent({
  name: 'FullMovieContainer',
  components: {
    Header,
  },
});
</script>

<style scoped>
  .full-container {
    width: 80%;
    background-color: #094353;
  }
</style>
