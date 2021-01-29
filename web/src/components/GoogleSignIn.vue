<template>
    <g-signin-button
        :params="googleSignInParams"
        @success="onSignInSuccess"
        @error="onSignInError"
    >
        <img src="../assets/google-icon.svg" id="google-icon" />
        <span id="google-button-content">Log In with Google</span>
    </g-signin-button>
</template>

<script>
import User from "../services/users";

export default {
    data() {
        const CLIENT_ID = "561729757161-b8t9odevo0k9cv9itb2ubp12f5gdo5o6";
        return {
            googleSignInParams: {
                client_id: `${CLIENT_ID}.apps.googleusercontent.com`,
            },
            user: {
                nome: "",
                codigo: "",
                origem: "Google",
            },
        };
    },
    methods: {
        onSignInSuccess(googleUser) {
            this.user.nome = googleUser.getBasicProfile().sd;
            this.user.codigo = googleUser.getBasicProfile().JR;
            User.store(this.user)
                .then(() => {
                    this.$router.push("/index-cliente");
                })
                .catch((error) => {
                    console.warn(error);
                });
            localStorage.setItem("usuario", JSON.stringify(this.user));
        },
        onSignInError(error) {
            console.warn("Ocorreu um erro na aplicação", error);
        },
    },
};
</script>

<style>
.g-signin-button {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: rgba(255, 247, 247, 0.863);
    color: #000;
    min-width: 210px;
    height: 35px;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    margin-top: 30px;
    text-align: center;
}

#google-icon {
    max-width: 30px;
    max-height: 30px;
    margin-right: 18px;
}

#google-button-content {
    margin-bottom: 10px;
}
</style>
