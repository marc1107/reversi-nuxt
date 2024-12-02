<template>
  <v-container class="board-container">
    <v-sheet elevation="4" class="board">
      <!-- Spielfeld-Raster -->
      <div class="board-grid">
        <BoardCell
          v-for="(cell, index) in flattenedBoard"
          :key="`cell-${index}`"
          :row="Math.floor(index / 8)"
          :col="index % 8"
          :stone="cell"
          @cell-clicked="handleCellClicked"
        />
      </div>
    </v-sheet>
  </v-container>
</template>

<script>
import BoardCell from './BoardCell.vue';

export default {
  components: {
    BoardCell
  },
  props: {
    flattenedBoard: Array
  },
  methods: {
    handleCellClicked(row, col) {
      this.$emit('cell-clicked', row, col);
    }
  }
};
</script>

<style scoped>
.board {
  aspect-ratio: 1;
  /* Sicherstellt, dass das Spielfeld quadratisch bleibt */
  width: 90vw;
  /* Nimmt bis zu 90% der Bildschirmbreite ein */
  max-width: 500px;
  /* Begrenzung auf eine maximale Breite */
  border: 2px solid black;
  /* Schwarzer Rahmen */
  background-color: transparent;
  /* Kein Hintergrund */
  display: flex;
  justify-content: center;
  align-items: center;
}

.board-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  /* 8 gleich große Spalten */
  grid-template-rows: repeat(8, 1fr);
  /* 8 gleich große Zeilen */
  gap: 2px;
  /* Abstand zwischen den Zellen */
  width: 100%;
  /* Passt sich an die Breite des Boards an */
  height: 100%;
  /* Passt sich an die Höhe des Boards an */
}

.board-container {
  width: fit-content;
  margin: 0 0;
}
</style>
