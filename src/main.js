import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib';

Vue.config.productionTip = false;
Vue.use(VueTelInputVuetify, {
  vuetify,
});

axios.defaults.baseURL = 'http://localhost:3000/'
// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)
// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");