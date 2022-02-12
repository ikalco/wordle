<template>
  <div
    :class="{
      keyboardtile: true,
      default: isDefault(),
      wrong: isWrong(),
      present: isPresent(),
      correct: isCorrect(),
      last: isLast(),
    }"
  >
    {{ this.letter }}
  </div>
</template>

<script>
export default {
  name: "Legend",
  props: ["letter", "type", "last"],
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
    isLast() {
      return this.$.vnode.key == this.last;
    },
  },
};
</script>

<style scoped>
div {
  touch-action: manipulation;
}

div.keyboardtile {
  display: flex;

  justify-content: center;
  align-items: center;

  flex: 1;

  padding: 0;
  border: 0;

  border-radius: 5px;
  margin: 0 4.8px 0 0;

  max-width: 48px;
  height: 48px;

  transition: background-color 100ms ease, color 100ms;
}

div.last {
  margin: 0;
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
