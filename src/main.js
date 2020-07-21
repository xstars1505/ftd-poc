import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import ToastService from "primevue/toastservice";

Vue.use(ToastService);

Vue.config.productionTip = false;

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  router,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  render: h => h(App)
}).$mount("#app");
