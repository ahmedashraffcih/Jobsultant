import axios from "axios";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    LOGIN: ({commit}, payload ) => {
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
    REGISTER: ({commit},{email,firstname,lastname,password}) =>{
      return new Promise((resolve, reject) =>{
        axios
          .post("Register", {
            email,firstname,lastname,password
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
  },
};
