<template>
  <div>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { auth } from '@/plugins/firebase'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password)
        // Handle successful login (e.g., redirect or show a message)
      } catch (error) {
        console.error('Error logging in:', error)
      }
    }
  }
}
</script>
