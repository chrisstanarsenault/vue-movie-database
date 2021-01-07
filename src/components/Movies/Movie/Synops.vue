<template>
<div class="overview">
  <p>{{overview}}</p>
</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Synops',
  props: ['overview']
});
</script>

<style scoped>
.overview {
  display: flex;
  justify-content: center;
  margin: 3rem 3rem 0 3rem;
  font-size: 1.3rem;
  background: #094353;
  border-radius: 3px;
  padding: 1rem;
}
</style>
