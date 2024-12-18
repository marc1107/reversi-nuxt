import {googleProvider, githubProvider} from "@/plugins/firebase";

export const state = () => ({
  user: null,
  isAuthenticated: false
})

export const mutations = {
  setUser(state, user) {
    state.user = user;
    state.isAuthenticated = !!user;
  },
  clearUser(state) {
    state.user = null;
    state.isAuthenticated = false;
  }
}

export const actions = {
  async login({ commit }, { email, password }) {
    try {
      const { user } = await this.$fire.auth.signInWithEmailAndPassword(email, password);
      commit('setUser', user);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  },
  async loginWithGoogle({ commit }) {
    try {
      const { user } = await this.$fire.auth.signInWithPopup(googleProvider);
      commit('setUser', user.displayName);
    } catch (error) {
      console.error('Error logging in with Google:', error.message);
    }
  },
  async loginWithGithub({ commit }) {
    try {
      const { user } = await this.$fire.auth.signInWithPopup(githubProvider);
      commit('setUser', user.displayName);
    } catch (error) {
      console.error('Error logging in with Github:', error.message);
    }
  },
  async logout({ commit }) {
    try {
      await this.$fire.auth.signOut();
      commit('clearUser');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  },
  async fetchUser({ commit }, user) {
    commit('setUser', user);
  }
}
