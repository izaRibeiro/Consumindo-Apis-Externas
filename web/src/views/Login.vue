<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha" />
      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    logar() {},
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
  color: #2CDC6D;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 200px;
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

.btn {
  display: block;
  padding: 10px 30px;
  background: #2CDC6D;
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

.btn:hover {
  background: #00FF5E;
  transform: scale(1.1);
}
</style>
