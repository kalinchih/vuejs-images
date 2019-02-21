import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import AuthHandler from "./components/AuthHandler";
import Galleries from "./components/Galleries";
import UploadImages from "./components/UploadImages";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/oauth2/callback", component: AuthHandler },
    { path: "/", component: Galleries },
    { path: "/upload", component: UploadImages }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
