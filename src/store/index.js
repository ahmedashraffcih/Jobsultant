import Vue from "vue";
import Vuex from "vuex";

import UIModule from './modules/ui'
import User from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui: UIModule,
    user: User,
  },
});
