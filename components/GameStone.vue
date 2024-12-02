<template>
  <v-avatar size="90%" :style="{ backgroundColor: color === 'black' ? 'black' : 'white' }" class="stone"></v-avatar>
</template>

<script>
export default {
  props: {
    color: String
  }
};
</script>

<style scoped>
.stone {
  border: 2px solid black;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>
