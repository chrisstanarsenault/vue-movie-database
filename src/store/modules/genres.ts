// state
interface Genres {
  genres: string[];
}

interface GenresState {
  genres: Genres | null;
}

const state: GenresState = {
  genres: null,
};

// getters
const getGenres = (state: GenresState) => state.genres;
const getters = {
  getGenres,
};

// mutations
const setGenres = (state: GenresState, genres: Genres) => {
  state.genres = genres;
};
const mutations = { setGenres };

// actions
const actions = {};

export default {
  state, getters, mutations, actions,
};
