<template>
  <div class="game">
    <PopupHandler ref="popuphandler"></PopupHandler>
    <Wordle
      @popupHandler="$refs.popuphandler.addPopup($event)"
      @setLetter="$refs.legend.setLetter($event)"
    ></Wordle>
    <Legend ref="legend"></Legend>
  </div>
</template>

<script>
import Legend from "./components/Legend.vue";
import PopupHandler from "./components/PopupHandler.vue";
import Wordle from "./components/Wordle.vue";

export default {
  name: "App",
  components: {
    Wordle,
    PopupHandler,
    Legend,
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
</style>
