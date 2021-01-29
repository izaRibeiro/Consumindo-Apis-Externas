<template>
    <section class="films-star-wars">
        <Menu></Menu>
        <div class="content">
            <h1>Planetas</h1>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Nome</th>
                            <th class="text-left">Gravidade</th>
                            <th class="text-left">Terreno</th>
                            <th class="text-left">Clima</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="planet in planets" :key="planet.created">
                            <td>{{ planet.name }}</td>
                            <td>{{ planet.gravity }}</td>
                            <td>{{ planet.terrain }}</td>
                            <td>{{ planet.climate }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
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
            planets: [],
        };
    },
    mounted() {
        StarWars.planets()
            .then((response) => {
                this.planets = response.data.results;
            })
            .catch((error) => {
                console.warn(error);
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
