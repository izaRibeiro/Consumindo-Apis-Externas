<template>
    <section class="films-star-wars">
        <Menu></Menu>
        <div class="content">
            <h1>Espécies</h1>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Nome</th>
                            <th class="text-left">Classificação</th>
                            <th class="text-left">Lingua</th>
                            <th class="text-left">Tempo de vida</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="specie in species" :key="specie.created">
                            <td>{{ specie.name }}</td>
                            <td>{{ specie.classification }}</td>
                            <td>{{ specie.language }}</td>
                            <td>{{ specie.average_lifespan }}</td>
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
            species: [],
        };
    },
    mounted() {
        StarWars.species()
            .then((response) => {
                this.species = response.data.results;
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
