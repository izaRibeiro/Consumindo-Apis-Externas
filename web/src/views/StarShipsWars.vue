<template>
    <section class="films-star-wars">
        <Menu></Menu>
        <div class="content">
            <h1>Espaçonaves</h1>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Nome</th>
                            <th class="text-left">Modelo</th>
                            <th class="text-left">Número de Passageiros</th>
                            <th class="text-left">Custo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="starShip in starShips"
                            :key="starShip.created"
                        >
                            <td>{{ starShip.name }}</td>
                            <td>{{ starShip.model }}</td>
                            <td>{{ starShip.passengers }}</td>
                            <td>{{ starShip.cost_in_credits }}</td>
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
            starShips: [],
        };
    },
    mounted() {
        StarWars.starships()
            .then((response) => {
                this.starShips = response.data.results;
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
