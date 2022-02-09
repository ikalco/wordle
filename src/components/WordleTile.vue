<template>
  <div
    :class="{
      box: true,
      typed: isTyped(),
      wrong: isWrong(),
      present: isPresent(),
      correct: isCorrect(),
    }"
  >
    {{ this.value.toLocaleUpperCase() }}
  </div>
</template>

<script>
export default {
  name: "WordleTile",
  props: {
    value: String,
    state: Number,
  },
  methods: {
    isTyped() {
      return this.value != " ";
    },
    isWrong() {
      return this.state == 0;
    },
    isPresent() {
      return this.state == 1;
    },
    isCorrect() {
      return this.state == 2;
    },
  },
};
</script>

<style scoped>
div.box {
  text-align: center;

  font-family: sans-serif;
  font-weight: bold;
  font-size: 2rem;
  user-select: none;

  width: 2em;
  height: 2em;
  line-height: 2em;

  border: solid #d3d6da 3px;
  transition: transform 1s;
}

div.typed {
  border: solid #73767a 3px;
  animation: typed 100ms;
}

@keyframes typed {
  from {
    transform: scale(0.8);
    opacity: 0;
  }

  40% {
    transform: scale(1.1);
    opacity: 1;
  }
}

div.wrong {
  background: #73767a;
  border: solid #73767a 3px;
}

div.present {
  background: #d4d237;
  border: solid #d4d237 3px;
}

div.correct {
  background: #2ec83b;
  border: solid #2ec83b 3px;
}
</style>
