<template>
  <div>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="signUp">Sign Up</button>
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
    async signUp() {
      try {
        await auth.createUserWithEmailAndPassword(this.email, this.password)
        // Handle successful sign-up (e.g., redirect or show a message)
      } catch (error) {
        console.error('Error signing up:', error)
      }
    }
  }
}
</script>
