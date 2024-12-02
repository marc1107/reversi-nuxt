<template>
  <v-app>
    <v-main class="white">
      <v-container fluid class="landing-page">
        <v-row justify="center" align="center" class="text-center">
          <v-col cols="12">
            <h1 class="main-header">Reversi</h1>
          </v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col cols="12" sm="10" md="8" lg="6" class="form-col">
            <v-card elevation="5" class="form-card">
              <v-card-title class="form-title">Enter Player Names</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="startGame">
                  <v-text-field label="Name Spieler 1" v-model="player1" outlined dense required></v-text-field>
                  <v-text-field label="Name Spieler 2" v-model="player2" outlined dense required></v-text-field>
                  <v-btn color="primary" block type="submit" class="start-btn">Spiel starten</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import baseUrl from "@/plugins/api";

export default {
  data() {
    return {
      player1: '',
      player2: ''
    };
  },
  methods: {
    async startGame() {
      try {
        const response = await fetch(`${baseUrl}/playerNames/${this.player1}/${this.player2}`);

        // Redirect to the game page after successful setup
        await this.$router.push('/game');
      } catch (error) {
        console.error('Error setting player names:', error);
      }
    }
  }
};
</script>

<style scoped>
.landing-page {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #4caf50;
  padding: 16px;
}

.main-header {
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  color: #333;
}

.form-col {
  max-width: 400px;
  width: 100%;
}

.form-card {
  border-radius: 15px;
  padding: 20px;
  width: 300px;
}

.form-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.start-btn {
  margin-top: 20px;
}

/* Responsive Styling */
@media (max-width: 600px) {
  .main-header {
    font-size: 2rem;
  }

  .form-card {
    padding:15px;
  }

  .form-title{
    font-size:
      1.25rem;}
}

@media(max-width:
  960px){
  .main-header{
    font-size:
      2.25rem;}
}
</style>
