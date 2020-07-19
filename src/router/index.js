import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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

export default router;
