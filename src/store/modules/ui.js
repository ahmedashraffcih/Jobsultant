const state = {
    job: false,
    displaySearch: false
}

const getters = {
  JOB: (state) => {
    return state.job;
  },
  DISPLAY_SEARCH: (state) => {
    return state.displaySearch;
  }
}

const mutations = {
  SET_JOB: (state, payload) => {
    state.job = payload;
  },
  SET_DISPLAY_SEARCH: (state, payload) => {
    state.displaySearch = payload;
  }
}

const actions = {

}

export const ui = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
