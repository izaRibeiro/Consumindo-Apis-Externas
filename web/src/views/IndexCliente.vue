<template>
    <section class="index-cliente">
        <Menu></Menu>
        <div class="content">
            <h1>Seja bem vindo {{ user.nome }}</h1>
            <h4>
                <p>
                    Essa é a página inicial, através do menu lateral é possível
                    explorar outras partes do sistema.
                </p>
                <p>Seu código de perfil é: {{ user.codigo }}</p>
            </h4>
        </div>
    </section>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
    name: "IndexCliente",
    components: {
        Menu,
    },
    data() {
        return {
            user: JSON.parse(localStorage.getItem("usuario")),
        };
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
