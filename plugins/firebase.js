import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCEoNM4BNupThZZi03bA7EMSk16m3hjH4w',
  authDomain: 'reversi-vue.firebaseapp.com',
  projectId: 'reversi-vue',
  storageBucket: 'reversi-vue.firebasestorage.app',
  messagingSenderId: '387953125740',
  appId: '1:387953125740:web:2ac782727ee5f4a10b6b49'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
