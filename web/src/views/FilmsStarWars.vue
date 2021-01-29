<template>
    <section class="films-star-wars">
        <Menu></Menu>
        <div class="content">
            <h1>Filmes</h1>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Título</th>
                            <th class="text-left">Diretor</th>
                            <th class="text-left">Produtor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="film in films" :key="film.created">
                            <td>{{ film.title }}</td>
                            <td>{{ film.director }}</td>
                            <td>{{ film.producer }}</td>
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
            films: [],
        };
    },
    mounted() {
        StarWars.films()
            .then((response) => {
                this.films = response.data.results;
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
