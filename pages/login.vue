<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col class="login d-flex justify-center align-center">
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                label="Email"
                v-model="email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="blue" class="white--text">Login</v-btn>
            </v-form>
            <p class="mt-4">
              Don't have an account?
              <router-link to="/signup">Sign up here</router-link>
            </p>
            <v-btn @click="loginWithGoogle" color="red" class="white--text mt-3">Sign in with Google</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password
        });
        await this.$router.push('/');
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    async loginWithGoogle() {
      try {
        await this.$store.dispatch('auth/loginWithGoogle');
        await this.$router.push('/');
      } catch (error) {
        console.error('Login with Google failed:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add any specific styles here */
.login {
  max-width: 500px;
  min-width: 200px;
  margin: 0 auto;
}
</style>
