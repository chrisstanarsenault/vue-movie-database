<template>
  <div class="rating-container">Popular</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RatingTypeFilter',
});
</script>

<style scoped>
  .rating-container {
    color: #e4d03a;
    background-color: #1186a7;
    padding: 0.6rem;
    font-size: 1.2rem;
  }
</style>
