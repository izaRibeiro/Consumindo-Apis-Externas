<template>
    <section class="login">
        <h1>Login</h1>
        <form>
            <label for="email">Nome</label>
            <input type="text" name="email" id="email" v-model="user.nome" />
            <label for="senha">E-mail</label>
            <input type="email" name="senha" id="senha" v-model="user.email" />
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
                email: "",
            },
        };
    },
    methods: {
        logar() {
            User.store(this.user).then(() => {
                this.$router.push("/index-cliente");
            });
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
    color: rgba(131, 113, 245, 0.952);
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

.button {
    display: block;
    padding: 10px 30px;
    background: rgba(131, 113, 245, 0.952);
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    transition: all 0.3s;
    border: none;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    cursor: pointer;
}

.button:hover {
    background: rgb(102, 85, 221);
    transform: scale(1.1);
}
</style>
