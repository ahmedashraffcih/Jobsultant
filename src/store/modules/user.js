// import axios from "axios";

// const state = {
//   IsLogged: false,
// }

// const getters = {
//   IsLoggedIn: (state) => {
//     return state.IsLogged;
//   },
// }
// const mutations = {
//   SET_LOGGED_IN_STATUS: (state) => {
//     state.IsLogged = true;
//   },
// }

// const actions = {
//   LOGIN: ({ commit }, {email,password}) => {
//     return new Promise((resolve, reject) => {
//       axios
//         .post("Login", {email,password})
//         .then(({ data, status }) => {
//           if (status === 200) {
//             commit('SET_LOGGED_IN_STATUS');
//             resolve(true);
//           }
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   },
//   REGISTER: ({ commit }, { firstname, lastname, email, password }) => {
//     return new Promise((resolve, reject) => {
//       axios
//         .post("Register", {
//           firstname,
//           lastname,
//           email,
//           password,
//         })
//         .then(({ data, status }) => {
//           if (status === 201) {
//             resolve(true);
//           }
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   },
// }

// export const user = {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations
// }
