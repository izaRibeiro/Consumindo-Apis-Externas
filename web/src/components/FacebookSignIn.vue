<template>
    <div>
        <facebook-login
            class="button-facebook"
            appId="733998527222513"
            @login="onLogin"
            @logout="onLogout"
            @sdk-loaded="sdkLoaded"
        >
        </facebook-login>
    </div>
</template>

<script>
import facebookLogin from "facebook-login-vuejs";
import User from "../services/users";

export default {
    name: "facebook-sign-in",
    components: {
        facebookLogin,
    },
    data() {
        return {
            user: {
                nome: "",
                codigo: "",
                origem: "Facebook",
            },
        };
    },
    methods: {
        getUserData() {
            this.FB.api(
                "/me",
                "GET",
                { fields: "name, id" },
                (userInformation) => {
                    this.user.nome = userInformation.name;
                    this.user.codigo = userInformation.id;

                    User.store(this.user).then(() => {
                        this.$router.push("/index-cliente");
                    });
                    localStorage.setItem("usuario", JSON.stringify(this.user));
                }
            );
        },
        sdkLoaded(payload) {
            this.isConnected = payload.isConnected;
            this.FB = payload.FB;
            if (this.isConnected) this.getUserData();
        },
        onLogin() {
            this.isConnected = true;
            this.getUserData();
        },
        onLogout() {
            this.isConnected = false;
        },
    },
};
</script>

<style>
.button-faccebook {
    margin-top: 30px;
}
</style>
