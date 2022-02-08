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

<style scoped>
Wordle {
  text-align: center;
}
</style>
