<template>
  <div class="box">
    {{ letter.toLocaleUpperCase() }}
  </div>
</template>

<script>
export default {
  name: "WordleTile",
  data() {
    return {
      letter: "A",
    };
  },
};
</script>

<style scoped>
div.box {
  font-family: sans-serif;
  font-weight: 800;
  font-size: 2rem;

  background: #747474;
  color: white;

  width: 2em;
  height: 2em;
  line-height: 2em;

  text-align: center;
  vertical-align: center;
}
</style>
