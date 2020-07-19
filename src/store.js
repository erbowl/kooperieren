import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firebaseLoad: false,
    user: {},
    status: false,
  },
  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user; //firebaseが返したユーザー情報
    },
    onUserStatusChanged(state, status) {
      state.status = status; //ログインしてるかどうか true or false
    },
    onFirebaseChanged(state, status) {
      state.firebaseLoad = status;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    isSignedIn(state) {
      return state.status;
    },
    firebaseLoad(state) {
      return state.firebaseLoad;
    },
  },
});
