<template>
    <section class="index-cliente">
        <Menu></Menu>
        <div class="content">
            <h1>Usuários</h1>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Código do Perfil</th>
                            <th class="text-left">Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.email }}</td>
                            <td>{{ user.nome }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
    </section>
</template>

<script>
import Menu from "../components/Menu.vue";
import User from "../services/users";

export default {
    name: "IndexCliente",
    components: {
        Menu,
    },
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        User.find().then((response) => {
            this.users = response.data;
        });
    },
    methods: {},
};
</script>

<style scoped>
.index-cliente {
    display: grid;
    margin: 30px;
    grid-template-columns: 0.5fr 4fr;
    grid-template-rows: auto;
}
</style>
