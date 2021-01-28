<template>
    <section class="login">
        <h1>Seja bem vindo</h1>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Nome</th>
                        <th class="text-left">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.nome">
                        <td>{{ user.nome }}</td>
                        <td>{{ user.email }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </section>
</template>

<script>
import User from "../services/users";

export default {
    name: "IndexCliente",
    components: {},
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
.v-data-table {
    max-width: 30%;
}
</style>
