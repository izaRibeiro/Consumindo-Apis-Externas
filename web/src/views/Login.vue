<template>
    <section class="login">
        <h1>Login</h1>
        <form>
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" v-model="user.nome" />
            <label for="senha">Código</label>
            <input
                type="codigo"
                name="codigo"
                id="codigo"
                v-model="user.codigo"
            />
            <button class="button" @click.prevent="logar">Logar</button>
        </form>
        <div id="login-externo">
            <GoogleSignIn></GoogleSignIn>
            <facebook-sign-in></facebook-sign-in>
        </div>
    </section>
</template>

<script>
import FacebookSignIn from "../components/FacebookSignIn.vue";
import GoogleSignIn from "../components/GoogleSignIn.vue";
import User from "../services/users";

export default {
    name: "Login",
    components: {
        GoogleSignIn,
        FacebookSignIn,
    },
    data() {
        return {
            user: {
                nome: "",
                codigo: "",
                origem: "Aplicação",
            },
        };
    },
    methods: {
        logar() {
            User.store(this.user).then(() => {
                this.$router.push("/index-cliente");
            });
            localStorage.setItem("usuario", JSON.stringify(this.user));
        },
    },
};
</script>

<style scoped>
.login {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
}

h1 {
    text-align: center;
    font-size: 2rem;
    margin-top: 40px;
}

form {
    display: grid;
}

.button {
    width: 100%;
    max-width: 100px;
    margin-left: auto;
    margin-right: auto;
}

input,
textarea {
    border-radius: 4px;
    border: 1px solid white;
    padding: 15px;
    box-shadow: 0 3px 3px rgba(30, 60, 90, 0.1);
    transition: all 0.3s;
    font-size: 1rem;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    margin-bottom: 15px;
}

#login-externo {
    display: flex;
    justify-content: space-around;
}
</style>
