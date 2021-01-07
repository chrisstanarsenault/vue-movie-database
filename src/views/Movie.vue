<template>
  <Header :title=title :rating=rating />
  <Backdrop :backdrop=backdrop :tagline=tagline />
  <div class="movie-info">
  <button @click="reset">Home</button>
    <GenresDateTime :genres=genres :release=release :runtime=runtime />
    <Synops :overview=overview />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';

import Header from '@/components/Movies/Movie/Header.vue';
import GenresDateTime from '@/components/Movies/Movie/GenresDateTime.vue';
import Backdrop from '@/components/Movies/Movie/Backdrop.vue';
import Synops from '@/components/Movies/Movie/Synops.vue';

export default defineComponent({
  name: 'Movie',
  components: {
    Header, Backdrop, GenresDateTime, Synops
  },
  props: ['movie'],
  setup(props, { emit }) {
    const {
      original_title: title,
      vote_average: rating,
      backdrop_path: backdrop,
      tagline,
      genres,
      release_date: release,
      runtime,
      overview
    } = toRefs(props.movie);

    const reset = () => {
      emit('reset');
    };

    return {
      title, rating, backdrop, tagline, genres, release, runtime, overview, reset
    };
  }
});

</script>

<style scoped>
  .movie-info {
    background-color:#094353b8;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 1rem 2rem 1rem;
  }
</style>
