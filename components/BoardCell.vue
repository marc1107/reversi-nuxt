<template>
  <v-card class="cell" :style="{ background: '#4caf50' }" outlined @click="handleClick">
    <GameStone v-if="stoneColor" :color="stoneColor" />
  </v-card>
</template>

<script>
import GameStone from './GameStone.vue';

export default {
  components: {
    GameStone
  },
  props: {
    row: Number,
    col: Number,
    stone: String
  },
  methods: {
    handleClick() {
      this.$emit('cell-clicked', this.row, this.col);
    }
  },
  computed: {
    stoneColor() {
      if (this.stone === 'B') {
        return 'black';
      } else if (this.stone === 'W') {
        return 'white';
      } else {
        return null;
      }
    }
  }
};
</script>

<style scoped>
.cell {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #4caf50;
}
</style>
