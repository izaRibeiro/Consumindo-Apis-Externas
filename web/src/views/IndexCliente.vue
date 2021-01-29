<template>
    <section class="index-cliente">
        <Menu></Menu>
        <h1>Seja bem vindo</h1>
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
        return {};
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
