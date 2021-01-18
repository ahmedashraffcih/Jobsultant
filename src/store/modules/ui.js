export default {
  state: {
    job: false,
    displaySearch: false,
  },
  getters: {
    JOB: (state) => {
      return state.job;
    },
    DISPLAY_SEARCH: (state) => {
      return state.displaySearch;
    },
  },
  mutations: {
    SET_JOB: (state, payload) => {
      state.job = payload;
    },
    SET_DISPLAY_SEARCH: (state, payload) => {
      state.displaySearch = payload;
    },
  },
  actions: {},
};
