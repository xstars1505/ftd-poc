import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List";
import Details from "../views/Details";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List
  },
  {
    path: "/details",
    name: "Details",
    component: Details
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
