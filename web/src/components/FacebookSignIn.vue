<template>
    <div>
        <facebook-login
            class="button"
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
                email: "",
            },
        };
    },
    methods: {
        getUserData() {
            this.FB.api(
                "/me",
                "GET",
                { fields: "email ,name" },
                (userInformation) => {
                    this.user.nome = userInformation.name;
                    this.user.email = userInformation.id;

                    User.store(this.user).then(() => {
                        this.$router.push("/index-cliente");
                    });
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
.button {
    margin-top: 30px;
}
</style>
