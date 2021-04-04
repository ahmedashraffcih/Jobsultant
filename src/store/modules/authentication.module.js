/* The vuex authentication module is in charge of the authentication section of the centralised state store. 
It contains actions for logging in and out of the tutorial application, and mutations for each of the lower level state changes involved for each action. */
import { UserService, AuthenticationError } from '../../services/user.service'
import { TokenService } from '../../services/storage.service'
import router from '../../router'

const state =  {
  authenticating: false,
  accessToken: TokenService.getToken(),
  authenticationErrorCode: 0,
  authenticationError: '',
  authenticationSuccess: false,
  user:{}
}
/*The initial logged in state of the user is set by checking if the user is saved in local storage, 
which keeps the user logged in if the browser is refreshed and between browser sessions.*/
const getters = {
  loggedIn: (state) => {
      return state.accessToken ? true : false
  },

  userdata: (state) => {
    return state.user;
  },

  authenticationErrorCode: (state) => {
      return state.authenticationErrorCode
  },

  authenticationError: (state) => {
      return state.authenticationError
  },

  authenticating: (state) => {
      return state.authenticating
  },
  authenticationSuccess: (state) => {
      return state.authenticationSuccess
  }
}

const mutations = {
  loginRequest(state) {
      state.authenticating = true;
      state.authenticationError = ''
      state.authenticationErrorCode = 0
  },

  loginSuccess(state, accessToken) {
      state.accessToken = accessToken
      state.authenticationSuccess = true;
      state.authenticating = false;
  },

  loginError(state, {errorCode, errorMessage}) {
      state.authenticating = false
      state.authenticationErrorCode = errorCode
      state.authenticationError = errorMessage
  },
  
  SetUser(state,user) {
      state.user = user
  },

  registerRequest(state) {
      state.authenticating = true;
      state.authenticationError = ''
      state.authenticationErrorCode = 0
  },

  registerSuccess(state, accessToken) {
      state.accessToken = accessToken
      state.authenticationSuccess = true;
      state.authenticating = false;
  },

  registerError(state, {errorCode, errorMessage}) {
      state.authenticating = false
      state.authenticationErrorCode = errorCode
      state.authenticationError = errorMessage
  },

  logoutSuccess(state) {
      state.accessToken = ''
  }
}

const actions = {
  async login({ commit }, {email, password}) {
      commit('loginRequest');
      try 
      {
          const data = await UserService.login(email, password);
          //console.log(data.token)
          //console.log(data)
          commit('loginSuccess', data.token)
          commit('SetUser', data)
          // Redirect the user to the page he first tried to visit or to the home view
          //router.push(router.history.current.query.redirect || '/');

          return true
      } 
      catch (e) 
      {
          if (e instanceof AuthenticationError) 
          {
              commit('loginError', {errorCode: e.errorCode, errorMessage: e.message})
          }
          return false
      }
  },
  async register({ commit }, {email, password, firstname, lastname}) {
      commit('registerRequest');

      try {
          const token = await UserService.register(email, password, firstname, lastname);
          commit('loginSuccess',token.token)
          commit('registerSuccess', token.token)
          //Console.log(token.token)
          commit('SetUser', token)
          // Redirect the user to the page he first tried to visit or to the home view
          router.push(router.history.current.query.redirect || '/User/build_cv');

          return true
      } catch (e) {
          if (e instanceof AuthenticationError) {
              commit('registerError', {errorCode: e.errorCode, errorMessage: e.message})
          }

          return false
      }
  },
  logout({ commit }) {
      UserService.logout()
      commit('logoutSuccess')
      router.push('/Authentication/login')
  }
}

export const auth = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
