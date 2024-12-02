<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Sign Up</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="signup">
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
              <v-btn type="submit" color="blue" class="white--text">Sign Up</v-btn>
            </v-form>
            <p class="mt-4">
              Already have an account?
              <router-link to="/login">Login here</router-link>
            </p>
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
    async signup() {
      try {
        console.log('Signing up with:', this.email, this.password);
        await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password);
        console.log('Signup successful');
        await this.$router.push('/');
      } catch (error) {
        console.error('Signup failed:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add any specific styles here */
</style>
