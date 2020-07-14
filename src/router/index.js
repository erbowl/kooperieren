import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shopping.vue")
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import(/* webpackChunkName: "about" */ "../views/Menu.vue")
  },
  {
    path: "/rule",
    name: "Rule",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Rules.vue")
  },
  {
    path: "/notification",
    name: "Notices",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Notices.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
