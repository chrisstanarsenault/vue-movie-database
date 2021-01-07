<template>
  <div class="genre">
    <p v-for="genre in genres" :key="genre.id" class="genre">
  {{getGenre(genre.id)}}
  </p>
  <p>{{format(new Date(release), 'MMM do, yyyy')}}</p>
  <p>{{runtime}} mins</p>
  </div>

</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { format } from 'date-fns';

export default defineComponent({
  name: 'GenresDateTime',
  props: ['genres', 'release', 'runtime'],
  setup() {
    const store = useStore();
    const { genres } = store.state;

    const getGenre = (id: number): string => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < genres.length; i++) {
        if (id === genres[i].id) {
          return genres[i].name;
        }
      }
      return '';
    };

    const log = (m: any) => console.log(m);
    return { store, getGenre, log, format };
  }
});
</script>

<style scoped>
.genre {
  display: flex;
}

p {
  margin: 0;
  font-size: 1.3rem;
}

p:not(:last-child) {
  border-right: 1px solid #E4D03A;
  padding-right: 1rem;
}

p:not(:first-child) {
  padding-left: 1rem;
}
</style>
