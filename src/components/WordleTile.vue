<template>
  <div
    :class="{
      box: true,
      typed: isTyped(),
      wrong: isWrong(),
      present: isPresent(),
      correct: isCorrect(),
      flipin: this.flipin,
      flipout: this.flipout,
      shake: this.invalid,
      scalebounce: this.scalebounce,
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
    invalid: Boolean,
    reset: Number,
  },
  methods: {
    isTyped() {
      return this.value != " ";
    },
    isWrong() {
      return this.state == 0 && this.flipout && !this.flipin;
    },
    isPresent() {
      return this.state == 1 && this.flipout && !this.flipin;
    },
    isCorrect() {
      return this.state == 2 && this.flipout && !this.flipin;
    },
  },
  data() {
    return {
      flipin: false,
      flipout: false,
      scalebounce: false,
    };
  },
  watch: {
    state: function () {
      this.flipin = true;
      setTimeout(() => {
        this.flipout = true;
        this.flipin = false;
      }, 250);
    },
    value: function () {
      if (this.value != " ") {
        this.scalebounce = true;
        setTimeout(() => {
          this.scalebounce = false;
        }, 100);
      }
    },
    reset: function () {
      this.flipin = false;
      this.flipout = false;
      this.scalebounce = false;
      console.log(this.value, this.state, this.invalid, this.reset);
    },
  },
};
</script>

<style scoped>
div.box {
  display: inline-flex;

  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  width: 100%;

  flex: 1;
  font-size: 2rem;

  border: solid #d3d6da 3px;
  color: black;
}

div.box::before {
  content: "";
  display: inline-block;
  padding-bottom: 100%;
}

div.scalebounce {
  animation: ScaleBounce 100ms forwards;
}

div.typed {
  border: solid #878a8c 3px;
}

@keyframes ScaleBounce {
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
  background: #787c7e;
  border: solid #787c7e 3px;
}

div.present {
  background: #c9b458;
  border: solid #c9b458 3px;
}

div.correct {
  background: #6aaa64;
  border: solid #6aaa64 3px;
}

div.flipin {
  animation: FlipIn 250ms ease-in;
}

div.flipout {
  color: white;
  animation: FlipOut 250ms ease-out forwards;
}

div.shake {
  animation: Shake 600ms;
}

@keyframes FlipIn {
  0% {
    transform: rotateX(0);
  }
  100% {
    transform: rotateX(-90deg);
  }
}

@keyframes FlipOut {
  0% {
    transform: rotateX(-90deg);
  }
  100% {
    transform: rotateX(0);
  }
}

@keyframes Shake {
  10%,
  90% {
    transform: translateX(-1px);
  }

  20%,
  80% {
    transform: translateX(2px);
  }

  30%,
  50%,
  70% {
    transform: translateX(-4px);
  }

  40%,
  60% {
    transform: translateX(4px);
  }
}
</style>
