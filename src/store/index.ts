import { createStore } from 'vuex';

export default createStore({
  state: {
    genres: null,
    movies: null,
    movie: null,
  },
  mutations: {
    UPDATE_MOVIES(state, value) {
      state.movies = value;
    },
    UPDATE_GENRES(state, value) {
      state.genres = value;
    },
    UPDATE_MOVIE(state, value) {
      state.movie = value;
    }
  },
  actions: {
    updateMovies({ state, commit }, value) {
      commit('UPDATE_MOVIES', value);
    },
    updateGenres({ state, commit }, value) {
      commit('UPDATE_GENRES', value);
    },
    updateMovie({ state, commit }, value) {
      commit('UPDATE_MOVIE', value);
    }
  },
  modules: {
  },
});
