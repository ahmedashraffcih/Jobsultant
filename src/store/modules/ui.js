const state = {
    displaySearch: false
}
/*The initial job state is set by checking if the user viewing the job that he want to apply for or not*/
const getters = {
  DISPLAY_SEARCH: (state) => {
    return state.displaySearch;
  }
}

const mutations = {
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
