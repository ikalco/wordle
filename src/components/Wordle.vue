<template>
  <div class="wordle">
    <WordleRow
      v-for="(value, index) in values"
      :key="index"
      :values="value"
      :states="states[index]"
      :invalid="invalids[index]"
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
      invalids: [false, false, false, false, false, false],
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
      flipping: false,
    };
  },
  methods: {
    handleKeyPress(event) {
      if (!this.flipping) {
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
            event.key.toLocaleLowerCase() +
            this.values[this.current].substring(this.index + 1);

          this.index++;
        }
      }
    },
    handleSubmission() {
      if (
        this.allowedWords[this.values[this.current]] ||
        this.possibleAnswers[this.values[this.current]]
      ) {
        let newstate = [-1, -1, -1, -1, -1];
        let answer = this.answer;

        for (let i = 0; i < newstate.length; i++) {
          const char = this.values[this.current][i];
          let answerr = this.answer;
          if (char == answerr[i]) {
            newstate[i] = 2;
            answer = answer.substring(0, i - 1) + answer.substring(i);
          } else if (!answerr.includes(char)) {
            newstate[i] = 0;
          }
        }

        for (let i = 0; i < newstate.length; i++) {
          const char = this.values[this.current][i];
          if (newstate[i] == -1) {
            let index = answer.indexOf(char);
            if (index != -1) {
              answer = answer.substring(0, index) + answer.substring(index + 1);
              newstate[i] = 1;
            } else newstate[i] = 0;
          }
        }

        for (let i = 0; i < this.states[this.current].length; i++) {
          setTimeout(() => {
            this.states[this.current][i] = newstate[i];
          }, 300 * i);
        }

        this.flipping = true;
        setTimeout(() => {
          if (this.values[this.current] == this.answer) {
            console.log("You Win!");
            window.removeEventListener("keyup", this.handleKeyPress);
            this.$emit("popuphandler", ["You Win!", false]);
          } else if (this.current == 5) {
            console.log("You Lose!");
            window.removeEventListener("keyup", this.handleKeyPress);
            this.$emit("popuphandler", [this.answer, false]);
          }
          this.index = 0;
          this.current++;
          this.flipping = false;
        }, 300 * this.states[this.current].length);
      } else {
        this.invalids[this.current] = true;
        setTimeout(() => {
          this.invalids[this.current] = false;
        }, 600);
        this.$emit("popuphandler", ["Invalid", true]);
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

        this.answer = "scoff";
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
