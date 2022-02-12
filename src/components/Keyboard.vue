<template>
  <div class="keyboard">
    <div class="row">
      <KeyboardTile
        v-for="(letter, index) in Object.keys(letters).slice(0, 10)"
        :key="index"
        :letter="letter"
        :type="letters[letter]"
        :last="9"
        @click="keyPressed(letter)"
      ></KeyboardTile>
    </div>
    <div class="row">
      <div class="halfspace"></div>
      <KeyboardTile
        v-for="(letter, index) in Object.keys(letters).slice(10, 19)"
        :key="index"
        :letter="letter"
        :type="letters[letter]"
        :last="8"
        @click="keyPressed(letter)"
      ></KeyboardTile>
      <div class="halfspace"></div>
    </div>
    <div class="row">
      <div class="tile onehalf" @click="keyPressed('Enter')">Enter</div>
      <KeyboardTile
        v-for="(letter, index) in Object.keys(letters).slice(19)"
        :key="index"
        :letter="letter"
        :type="letters[letter]"
        @click="keyPressed(letter)"
      ></KeyboardTile>
      <div class="tile onehalf last" @click="keyPressed('Backspace')">
        Delete
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
    resetState() {
      this.letters = {
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
      };
    },
  },
};
</script>

<style scoped>
div.keyboard {
  display: flex;
  flex-direction: column;

  row-gap: 6px;

  max-width: 528px;
  max-height: 174px;

  user-select: none;

  margin: auto;
  margin-top: 50px;
}

div.row {
  display: flex;
}

div.tile {
  display: flex;

  background-color: #d3d6da;
  color: black;

  justify-content: center;
  align-items: center;

  flex: 1;

  padding: 0;
  border: 0;

  max-width: 48px;
  height: 48px;

  border-radius: 5px;
  margin: 0 4.8px 0 0;
}

div.last {
  margin: 0;
}

div.onehalf {
  flex: 1.5;
  max-width: 72px;
}

div.halfspace {
  flex: 0.5;
  max-width: 24px;
}
</style>
