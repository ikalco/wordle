<template>
  <div id="game">
    <div id="center">
      <PopupHandler ref="popuphandler" @reset="this.resetGame()"></PopupHandler>
      <Wordle
        @popupHandler="$refs.popuphandler.addPopup($event)"
        @setLetter="$refs.keyboard.setLetter($event)"
        ref="wordle"
      ></Wordle>
      <Keyboard
        ref="keyboard"
        @keyPressed="$refs.wordle.handleKeyPress($event)"
      ></Keyboard>
    </div>
  </div>
</template>

<script>
import Keyboard from "./components/Keyboard.vue";
import PopupHandler from "./components/PopupHandler.vue";
import Wordle from "./components/Wordle.vue";

export default {
  name: "App",
  components: {
    Wordle,
    PopupHandler,
    Keyboard,
  },
  methods: {
    resetGame() {
      this.$refs.wordle.resetState();
      this.$refs.popuphandler.resetState();
      this.$refs.keyboard.resetState();
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
  font-weight: bold;
}

div#game {
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

div#center {
  display: table-cell;
  vertical-align: middle;
}
</style>
