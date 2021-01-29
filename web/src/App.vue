<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            user: {
                nome: "",
                codigo: "",
            },
        };
    },
};
</script>

<style></style>
