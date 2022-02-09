<template>
  <WordleTile
    v-for="n in 5"
    :key="n"
    :value="this.values.at(n - 1)"
    :state="this.states[n - 1]"
    :invalid="this.invalid"
  ></WordleTile>
</template>

<script>
import WordleTile from "./WordleTile.vue";

export default {
  name: "WordleRow",
  components: {
    WordleTile,
  },
  props: ["values", "states", "invalid"],
};
</script>

<style scoped></style>
