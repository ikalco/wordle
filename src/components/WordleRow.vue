<template>
  <div class="row">
    <WordleTile
      v-for="n in 5"
      :key="n"
      :value="this.values.at(n - 1)"
      :state="this.states[n - 1]"
      :invalid="this.invalid"
      :reset="this.reset"
    ></WordleTile>
  </div>
</template>

<script>
import WordleTile from "./WordleTile.vue";

export default {
  name: "WordleRow",
  components: {
    WordleTile,
  },
  props: ["values", "states", "invalid", "reset"],
};
</script>

<style scoped>
div.row {
  display: grid;

  grid-template-columns: repeat(5, 1fr);

  grid-gap: 5px;
}
</style>
