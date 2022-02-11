<template>
  <div class="keyboard">
    <div class="row">
      <KeyboardTile
        v-for="(letter, index) in Object.keys(letters).slice(0, 10)"
        :key="index"
        :letter="letter"
        :type="letters[letter]"
        @click="keyPressed(letter)"
      ></KeyboardTile>
    </div>
    <div class="row">
      <div class="half-space">&nbsp;</div>
      <KeyboardTile
        v-for="(letter, index) in Object.keys(letters).slice(10, 19)"
        :key="index"
        :letter="letter"
        :type="letters[letter]"
        @click="keyPressed(letter)"
      ></KeyboardTile>
    </div>
    <div class="row">
      <div class="one-half-space" @click="keyPressed('Enter')">Enter</div>
      <KeyboardTile
        v-for="(letter, index) in Object.keys(letters).slice(19)"
        :key="index"
        :letter="letter"
        :type="letters[letter]"
        @click="keyPressed(letter)"
      ></KeyboardTile>
      <div
        class="one-half-space"
        @click="keyPressed('Backspace')"
        style="font-family: 'Lucida Sans Unicode'; width: 4.8rem"
      >
        ←
      </div>
    </div>
  </div>
</template>

<script>
import KeyboardTile from "./KeyboardTile.vue";
export default {
  components: { KeyboardTile },
  name: "Keyboard",
  data() {
    return {
      letters: {
        Q: -1,
        W: -1,
        E: -1,
        R: -1,
        T: -1,
        Y: -1,
        U: -1,
        I: -1,
        O: -1,
        P: -1,
        A: -1,
        S: -1,
        D: -1,
        F: -1,
        G: -1,
        H: -1,
        J: -1,
        K: -1,
        L: -1,
        Z: -1,
        X: -1,
        C: -1,
        V: -1,
        B: -1,
        N: -1,
        M: -1,
      },
    };
  },
  methods: {
    setLetter(lettervalue) {
      if (this.letters[lettervalue[0].toLocaleUpperCase()] < lettervalue[1]) {
        this.letters[lettervalue[0].toLocaleUpperCase()] = lettervalue[1];
      }
    },
    keyPressed(key) {
      if (key == "Enter") {
        this.$emit("keyPressed", {
          key: "Enter",
          which: 13,
          keyCode: 13,
        });
      } else if (key == "Backspace") {
        this.$emit("keyPressed", {
          key: "Backspace",
          which: 8,
          keyCode: 8,
        });
      } else {
        this.$emit("keyPressed", {
          key: key,
          which: key.charCodeAt(0),
          keyCode: key.charCodeAt(0),
        });
      }
    },
  },
};
</script>

<style scoped>
div.half-space {
  display: inline-block;

  line-height: 3.2rem;

  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  user-select: none;

  width: 1.5rem;
  height: 3rem;

  margin-top: 0.2em;
  margin-bottom: 0.2em;
}

div.one-half-space {
  display: inline-block;

  text-align: center;
  line-height: 3.2rem;

  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  user-select: none;

  width: 4.5rem;
  height: 3rem;

  border: 0;
  padding: 0;
  border-radius: 5px;

  margin-left: 0.1em;
  margin-right: 0.1em;

  margin-top: 0.2em;
  margin-bottom: 0.2em;

  background-color: #d3d6da;
  color: black;
}
</style>
