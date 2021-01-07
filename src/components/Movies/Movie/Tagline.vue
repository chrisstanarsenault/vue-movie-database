<template>
<h3>{{movieTagline}}</h3>
</template>

<script lang='ts'>
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'Tagline',
  props: ['tagline'],
  setup(props) {
    const { tagline: movieTagline } = toRefs(props);
    return { movieTagline };
  }
});
</script>

<style scoped>
h3 {
  position: absolute;
  background: #E4D03A;
  color: white;
  font-size: 2rem;
  padding: 1rem;
  bottom: -3rem;
  left: .8rem;
  box-shadow: -4px 2px 15px 8px #00000070;
  border-radius: 3px;
}
</style>
