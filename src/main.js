import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import ToastService from "primevue/toastservice";
// Importing the Nova Light PrimeVue theme styles
import "primevue/resources/themes/saga-blue/theme.css";

// Importing the base PrimeVue component styles
import "primevue/resources/primevue.min.css";

// Importing the base PrimeIcon styles
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

Vue.config.productionTip = false;
Vue.use(ToastService);

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
