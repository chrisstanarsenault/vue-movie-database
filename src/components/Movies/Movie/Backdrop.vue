<template>
<div class="backdrop-container">
<div :style='backImage' class="backdrop"></div>
<Tagline :tagline=movieTagline />
</div>

</template>

<script lang='ts'>
import { defineComponent, toRefs } from 'vue';
import Tagline from '@/components/Movies/Movie/Tagline.vue';

export default defineComponent({
  name: 'Backdrop',
  props: ['backdrop', 'tagline'],
  components: {
    Tagline
  },
  setup(props) {
    const url = `https://image.tmdb.org/t/p/w1280${props.backdrop}`;
    const backImage = {
      'background-image': `url(${url})`
    };
    const { tagline: movieTagline } = toRefs(props);

    return {
      url, backImage, movieTagline
    };
  }
});
</script>

<style scoped>
.backdrop-container {
  width: 100%;
  height: 50%;

  position: relative;
}

.backdrop {
  width: 100%;
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
