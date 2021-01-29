import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import IndexCliente from "./views/IndexCliente.vue";
import ListUsers from "./views/ListUsers.vue";
import FilmsStarWars from "./views/FilmsStarWars.vue";
import PlanetsStarWars from "./views/PlanetsStarWars.vue";
import SpeciesStarWars from "./views/SpeciesStarWars.vue";
import StarShipsStarWars from "./views/StarShipsWars.vue";

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
        {
            path: "/films-star-wars",
            name: "filmsStarWars",
            component: FilmsStarWars,
        },
        {
            path: "/planets-star-wars",
            name: "planetsStarWars",
            component: PlanetsStarWars,
        },
        {
            path: "/species-star-wars",
            name: "speciesStarWars",
            component: SpeciesStarWars,
        },
        {
            path: "/starships-star-wars",
            name: "starshipsStarWars",
            component: StarShipsStarWars,
        },
    ],
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: "smooth" });
    },
});
