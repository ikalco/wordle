<template>
  <div class="legend">
    <LegendTile
      v-for="(letter, index) in Object.keys(letters)"
      :key="index"
      :letter="letter"
      :type="letters[letter]"
    ></LegendTile>
  </div>
</template>

<script>
import LegendTile from "./LegendTile.vue";
export default {
  components: { LegendTile },
  name: "Legend",
  data() {
    return {
      letters: {
        A: -1,
        B: -1,
        C: -1,
        D: -1,
        E: -1,
        F: -1,
        G: -1,
        H: -1,
        I: -1,
        J: -1,
        K: -1,
        L: -1,
        M: -1,
        N: -1,
        O: -1,
        P: -1,
        Q: -1,
        R: -1,
        S: -1,
        T: -1,
        U: -1,
        V: -1,
        W: -1,
        X: -1,
        Y: -1,
        Z: -1,
      },
    };
  },
  methods: {
    setLetter(lettervalue) {
      if (this.letters[lettervalue[0].toLocaleUpperCase()] < lettervalue[1]) {
        this.letters[lettervalue[0].toLocaleUpperCase()] = lettervalue[1];
      }
    },
  },
};
</script>

<style scoped>
div.legend {
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  column-gap: 0.5em;
  row-gap: 0.5em;
}
</style>
