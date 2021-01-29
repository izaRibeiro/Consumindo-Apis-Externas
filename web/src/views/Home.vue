<template>
    <section class="home">
        <h1>Home</h1>
        <router-link class="btn" to="/login"> Login </router-link>
    </section>
</template>

<script>
export default {
    name: "Home",
    components: {},
    data() {
        return {};
    },
    methods: {},
    mounted() {
        localStorage.setItem("usuario", "");
    },
};
</script>

<style scoped></style>
