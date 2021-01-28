import Vue from "vue";
import GSignInButton from "vue-google-signin-button";
import App from "./App.vue";
import router from "./router";

Vue.use(GSignInButton);
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
