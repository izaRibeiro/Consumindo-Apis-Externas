<template>
    <section class="films-star-wars">
        <Menu></Menu>
        <h1>Planetas</h1>
    </section>
</template>

<script>
import Menu from "../components/Menu.vue";
import StarWars from "../services/starWars";

export default {
    name: "FilmsStarWars",
    components: {
        Menu,
    },
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        StarWars.planets().then((response) => {
            console.log(response.data.results);
        });
    },
    methods: {},
};
</script>

<style scoped>
.films-star-wars {
    display: grid;
    margin: 30px;
    grid-template-columns: 0.5fr 4fr;
    grid-template-rows: auto;
}
</style>
