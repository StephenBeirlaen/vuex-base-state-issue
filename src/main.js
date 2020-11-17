import Vue from "vue";
import App from "./App";
import store from "./store";

new Vue({
  components: {App},
  template: "<App/>",
  store: store
}).$mount("#app");
