<template>
  <PopupHandler ref="popuphandler"></PopupHandler>
  <Wordle @popuphandler="$refs.popuphandler.addPopup($event)"></Wordle>
</template>

<script>
import PopupHandler from "./components/PopupHandler.vue";
import Wordle from "./components/Wordle.vue";

export default {
  name: "App",
  components: {
    Wordle,
    PopupHandler,
  },
};
</script>

<style>
#app {
  display: grid;
  grid-template-rows: 100vh;
  align-items: center;
  justify-items: center;
}
</style>
