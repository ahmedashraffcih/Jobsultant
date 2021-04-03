import Vue from "vue";
import Vuex from "vuex";
import {ui} from './modules/ui'
import {user} from './modules/user'
import {auth} from './modules/authentication.module'

//The vuex store folder contains all vuex modules and everything relating to the vuex store

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui,
    user,
    auth
  },
});
