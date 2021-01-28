import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import IndexCliente from "./views/IndexCliente.vue";
import ListUsers from "./views/ListUsers.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/index-cliente",
            name: "indexCliente",
            component: IndexCliente,
        },
        {
            path: "/list-users",
            name: "listUsers",
            component: ListUsers,
        },
    ],
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: "smooth" });
    },
});
