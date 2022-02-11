<template>
  <div class="game">
    <PopupHandler ref="popuphandler"></PopupHandler>
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
};
</script>

<style>
div.game {
  display: grid;
  align-items: center;
  justify-items: center;

  height: 100vh;
}

@media only screen and (min-width: 280px) {
  html {
    font-size: 8px;
  }
}

@media only screen and (min-width: 320px) {
  html {
    font-size: 9px;
  }
}

@media only screen and (min-width: 375px) {
  html {
    font-size: 10px;
  }
}

@media only screen and (min-width: 425px) {
  html {
    font-size: 12px;
  }
}

@media only screen and (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

@media only screen and (min-width: 1024px) {
  html {
    font-size: 24px;
  }
}
</style>
