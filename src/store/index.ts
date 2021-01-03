import { createStore } from 'vuex';

export default createStore({
  state: {
    genres: null,
    movies: null
  },
  mutations: {
    UPDATE_MOVIES(state, value) {
      state.movies = value;
    },
    UPDATE_GENRES(state, value) {
      state.genres = value;
    }
  },
  actions: {
    updateMovies({ state, commit }, value) {
      commit('UPDATE_MOVIES', value);
    },
    updateGenres({ state, commit }, value) {
      commit('UPDATE_GENRES', value);
    }
  },
  modules: {
  },
});
