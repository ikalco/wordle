<template>
  <div
    :class="{
      tile: true,
      default: isDefault(),
      wrong: isWrong(),
      present: isPresent(),
      correct: isCorrect(),
    }"
  >
    {{ this.letter }}
  </div>
</template>

<script>
export default {
  name: "Legend",
  props: ["letter", "type"],
  methods: {
    isDefault() {
      return this.type == -1;
    },
    isWrong() {
      return this.type == 0;
    },
    isPresent() {
      return this.type == 1;
    },
    isCorrect() {
      return this.type == 2;
    },
  },
};
</script>

<style scoped>
div {
  touch-action: manipulation;
}

div.tile {
  display: inline-block;

  text-align: center;
  line-height: 3.2rem;

  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  user-select: none;

  width: 3rem;
  height: 3rem;

  border: 0;
  padding: 0;
  border-radius: 5px;

  transition: background-color 100ms ease, color 100ms;

  margin-left: 0.1em;
  margin-right: 0.1em;

  margin-top: 0.2em;
  margin-bottom: 0.2em;
}

div.default {
  background-color: #d3d6da;
  color: black;
}

div.wrong {
  background: #787c7e;
  color: white;
}

div.present {
  background: #c9b458;
  color: white;
}

div.correct {
  background: #6aaa64;
  color: white;
}
</style>
