import axios from "axios";

const state = {
  IsLogged: false,
  UserName: "",
}

const getters = {
  IsLoggedIn: (state) => {
    return state.IsLogged;
  },
}
const mutations = {}

const actions = {
  LOGIN: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .post("Login", payload)
        .then(({ data, status }) => {
          if (status === 200) {
            resolve(true);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  REGISTER: ({ commit }, { firstname, lastname, email, password }) => {
    return new Promise((resolve, reject) => {
      axios
        .post("Register", {
          firstname,
          lastname,
          email,
          password,
        })
        .then(({ data, status }) => {
          if (status === 201) {
            resolve(true);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
}

export const user = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
