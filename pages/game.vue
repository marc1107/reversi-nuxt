<template>
  <v-container class="game-container" fluid>
    <v-row justify="center" align="center" class="player-info" v-if="!loading">
      <v-col cols="auto" class="text-center">
        <v-avatar :style="{ backgroundColor: currentPlayer, border: 'solid', borderColor: 'black' }" size="40"></v-avatar>
      </v-col>
      <v-col cols="auto" class="text-center">
        <p>{{ currentPlayer === 'black' ? player1 : player2 }}</p>
      </v-col>
      <v-col cols="auto" class="text-center">
        <v-avatar :style="{ backgroundColor: currentPlayer, border: 'solid', borderColor: 'black' }" size="40"></v-avatar>
      </v-col>
    </v-row>

    <v-row justify="center" align="center" v-if="loading">
      <v-col cols="auto" class="text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>

    <GameBoard v-if="!loading" :flattenedBoard="flattenedBoard" @cell-clicked="makeMove"/>
  </v-container>
</template>

<script>
import baseUrl from "@/plugins/api";

export default {
  data() {
    return {
      player1: '',
      player2: '',
      currentPlayer: 'black',
      currentPlayerColor: 'black',
      gameField: [],
      loading: true
    };
  },
  computed: {
    flattenedBoard() {
      return this.gameField.flat();
    }
  },
  methods: {
    async makeMove(row, col) {
      try {
        const response = await fetch(`${baseUrl}/makeMoveAjax/${row + 1}/${col + 1}`);
        const data = await response.json();
        this.gameField = data.newBoard.cells;
        this.currentPlayer = data.newBoard.playerState === 'W' ? 'white' : 'black';
        this.currentPlayerColor = this.currentPlayer;
        console.log('Updated game field:', this.gameField);
      } catch (error) {
        console.error('Error making move:', error);
      }
    },
    async initializeGameField() {
      try {
        const response = await fetch(`${baseUrl}/getField`);
        const data = await response.json();
        this.gameField = data.newBoard.cells;
        this.currentPlayer = data.newBoard.playerState === 'W' ? 'white' : 'black';
        this.currentPlayerColor = this.currentPlayer;
        console.log('Initialized game field:', this.gameField);
      } catch (error) {
        console.error('Error initializing game field:', error);
      }
    },
    async initializePlayers() {
      try {
        const response = await fetch(`${baseUrl}/playerNames`);
        const data = await response.json();
        this.player1 = data.player1Name;
        this.player2 = data.player2Name;
        console.log('Initialized players:', this.player1, this.player2);
      } catch (error) {
        console.error('Error initializing players:', error);
      }
    },
    async initializeGame() {
      await this.initializeGameField();
      await this.initializePlayers();
      this.loading = false;
    }
  },
  mounted() {
    this.initializeGame();
  }
};
</script>

<style scoped>
.game-container {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.player-info {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
