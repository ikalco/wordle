<template>
  <Wordle></Wordle>
</template>

<script>
import Wordle from "./components/Wordle.vue";
export default {
  name: "App",
  components: {
    Wordle,
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
