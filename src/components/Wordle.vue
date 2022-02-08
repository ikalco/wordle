<template>
  <div class="wordle">
    <WordleTile v-for="n in 30" :key="n"></WordleTile>
  </div>
</template>

<script>
import WordleTile from "./WordleTile.vue";

export default {
  name: "Wordle",
  components: {
    WordleTile,
  },
};
</script>

<style scoped>
div.wordle {
  display: grid;

  grid-template-columns: min-content min-content min-content min-content min-content;
  grid-template-rows: auto auto auto auto auto auto;

  column-gap: 1em;
  row-gap: 1em;

  text-align: center;
}
</style>
