<template>
    <section class="home">
        <h1>Home</h1>
        <router-link class="btn" to="/login">
            <button class="button">Login</button>
        </router-link>
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

<style scoped>
.home {
    margin-left: 50%;
    margin-top: 15%;
}
</style>
