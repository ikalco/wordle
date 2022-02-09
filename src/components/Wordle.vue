<template>
  <div class="wordle">
    <WordleRow
      v-for="(value, index) in values"
      :key="index"
      :values="value"
      :states="states[index]"
    ></WordleRow>
  </div>
</template>

<script>
import WordleRow from "./WordleRow.vue";

export default {
  name: "Wordle",
  components: {
    WordleRow,
  },
  data() {
    return {
      current: 0,
      index: 0,
      values: ["     ", "     ", "     ", "     ", "     ", "     "],
      states: [
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
      ],
      allowedWords: {},
      possibleAnswers: {},
      answer: "",
    };
  },
  methods: {
    handleKeyPress(event) {
      if (event.key == "Enter") {
        if (this.index == 5) {
          this.handleSubmission();
        }
        return;
      } else if (event.key == "Backspace") {
        this.values[this.current] =
          this.values[this.current].substring(0, this.index - 1) +
          this.values[this.current].substring(this.index);

        if (this.values[this.current].length < 5) {
          this.values[this.current] += " ";
        }

        if (this.index > 0) this.index--;
      } else if (event.which >= 65 && event.which <= 90 && this.index < 5) {
        this.values[this.current] =
          this.values[this.current].substring(0, this.index) +
          event.key +
          this.values[this.current].substring(this.index + 1);

        this.index++;
      }
    },
    handleSubmission() {
      if (
        this.allowedWords[this.values[this.current]] ||
        this.possibleAnswers[this.values[this.current]]
      ) {
        if (this.values[this.current] == this.answer) {
          console.log("You Win!");
          window.removeEventListener("keyup", this.handleKeyPress);
        } else if (this.current == 5) {
          console.log("You Lose!");
          window.removeEventListener("keyup", this.handleKeyPress);
        }

        let lettersAnswered = {};
        let newstate = [0, 0, 0, 0, 0];
        for (let i = 0; i < this.states[this.current].length; i++) {
          if (this.values[this.current][i] == this.answer[i]) {
            newstate[i] = 2;
          } else if (this.answer.includes(this.values[this.current][i])) {
            newstate[i] = 1;
          } else {
            newstate[i] = 0;
          }

          if (
            lettersAnswered[this.values[this.current][i]] == undefined ||
            newstate[i] > lettersAnswered[this.values[this.current][i]]
          ) {
            lettersAnswered[this.values[this.current][i]] = newstate[i];
          }
        }
        for (let i = 0; i < this.states[this.current].length; i++) {
          if (
            lettersAnswered[this.values[this.current][i]] != undefined &&
            newstate[i] < lettersAnswered[this.values[this.current][i]]
          ) {
            newstate[i] = 0;
          }
        }

        for (let i = 0; i < this.states[this.current].length; i++) {
          setTimeout(() => {
            this.states[this.current][i] = newstate[i];
          }, 300 * i);
        }

        setTimeout(() => {
          this.index = 0;
          this.current++;
        }, 300 * this.states[this.current].length);
      } else {
        console.log("Invalid Word");
      }
    },
  },
  mounted: function () {
    window.addEventListener("keyup", this.handleKeyPress);
    fetch("words.json")
      .then((data) => data.json())
      .then((dataobj) => {
        this.allowedWords = dataobj.allowedWords;
        this.possibleAnswers = dataobj.possibleAnswers;
        this.answer = Object.keys(this.possibleAnswers);
        this.answer =
          this.answer[Math.floor(Math.random() * this.answer.length)];

        console.log(this.answer);
      });
  },
  unmounted: function () {
    window.removeEventListener("keyup", this.handleKeyPress);
  },
};
</script>

<style scoped>
div.wordle {
  display: grid;

  grid-template-columns: min-content min-content min-content min-content min-content;
  grid-template-rows: auto auto auto auto auto auto;

  column-gap: 0.5em;
  row-gap: 0.5em;
}
</style>
