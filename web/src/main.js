import Vue from "vue";
import GSignInButton from "vue-google-signin-button";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import "vuetify/dist/vuetify.min.css";

Vue.use(GSignInButton);
Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
