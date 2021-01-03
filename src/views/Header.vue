<template>
  <div class="header">
    <Logo />
    <Searchbar />
    <RatingTypeFilter />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';
import Searchbar from '@/components/Searchbar.vue';
import RatingTypeFilter from '@/components/RatingTypeFilter.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Logo,
    Searchbar,
    RatingTypeFilter,
  },
});
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
