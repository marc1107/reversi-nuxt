import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCEoNM4BNupThZZi03bA7EMSk16m3hjH4w',
  authDomain: 'reversi-vue.firebaseapp.com',
  projectId: 'reversi-vue',
  storageBucket: 'reversi-vue.firebasestorage.app',
  messagingSenderId: '387953125740',
  appId: '1:387953125740:web:2ac782727ee5f4a10b6b49'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

export default {
  async mounted() {
    this.$fire.auth.onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('auth/fetchUser', user);
      } else {
        this.$store.dispatch('auth/clearUser');
      }
    });
  }
}
