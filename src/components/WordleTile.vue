<template>
  <div
    :class="{
      box: true,
      typed: isTyped(),
      wrong: isWrong(),
      present: isPresent(),
      correct: isCorrect(),
      flipin: flipin,
      flipout: flipout,
      shake: invalid,
      scalebounce: scalebounce,
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

div.scalebounce {
  animation: ScaleBounce 100ms forwards;
}

div.typed {
  border: solid #878a8c 3px;
  transform: scale(1);
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
