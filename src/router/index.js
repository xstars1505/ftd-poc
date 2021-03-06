import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List";
import Details from "../views/Details";
import WorkMenuList from "../views/WorkMenuList";
import CreateOrder from "../views/CreateOrder";

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
  },
  {
    path: "/create-order",
    name: "CreateOrder",
    component: CreateOrder
  },
  {
    path: "/work-menus",
    name: "WorkMenuList",
    component: WorkMenuList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  routes
});

export default router;
