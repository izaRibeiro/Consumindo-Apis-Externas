<template>
    <section class="menu">
        <v-card class="mx-auto" max-width="300" tile>
            <v-list dense>
                <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-content>
                            <router-link :to="item.link">
                                <v-list-item-title
                                    v-text="item.text"
                                ></v-list-item-title>
                            </router-link>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </section>
</template>

<script>
export default {
    name: "Menu",
    components: {},
    data() {
        return {
            items: [
                { text: "Meus Dados", link: "/index-cliente" },
                { text: "Listar Usuários", link: "/list-users" },
                { text: "Filmes", link: "/films-star-wars" },
                { text: "Planetas", link: "/planets-star-wars" },
                { text: "Espécies", link: "/species-star-wars" },
                { text: "Naves", link: "/starships-star-wars" },
                { text: "Sair", link: "/" },
            ],
        };
    },
    methods: {},
};
</script>

<style scoped>
.menu {
    height: 100px;
    width: 130px;
}
</style>
