import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "top" */ "../views/Top.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: () =>
      import(/* webpackChunkName: "shopping" */ "../views/Shopping.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import(/* webpackChunkName: "menu" */ "../views/Menu.vue"),
  },
  {
    path: "/rule",
    name: "Rule",
    component: () =>
      import(/* webpackChunkName: "rule" */ "../views/Rules.vue"),
  },
  {
    path: "/notification",
    name: "Notices",
    component: () =>
      import(/* webpackChunkName: "notification" */ "../views/Notices.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.name == "Login")) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    if (!store.getters.isSignedIn) {
      next("/login");
    } else {
      next();
    }
  } else {
    next(); // next() を常に呼び出すようにしてください!
  }
});
export default router;
