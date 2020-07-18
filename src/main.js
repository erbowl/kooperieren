import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import Firebase from "./firebase";
import store from "./store";
import router from "./router";

Firebase.init();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
