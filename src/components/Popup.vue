<template>
  <div :class="{ container: true, fade: fadee }" :style="{ display: display }">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    value: String,
    fade: Boolean,
    identifier: Number,
  },
  data() {
    return {
      fadee: this.fade,
      display: "block",
    };
  },
  mounted() {
    if (this.fade) {
      this.fadee = false;
      setTimeout(() => {
        this.fadee = true;
      }, 750);
      setTimeout(() => {
        this.display = "none";
        this.$emit("deletepopup", [this.value, this.fade, this.identifier]);
      }, 1250);
    }
  },
};
</script>

<style scoped>
div.container {
  z-index: 1000;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  padding-top: 1vw;
  padding-bottom: 1vw;

  background: rgb(53, 53, 53);
  color: white;

  font-family: sans-serif;
  font-size: 2rem;
  user-select: none;

  width: max-content;
  height: max-content;
  text-align: center;
  line-height: max-content;

  border-radius: 5px;

  position: relative;
  margin: auto;
  margin-top: 10px;
}

div.fade {
  animation: fade 500ms forwards;
}

@keyframes fade {
  100% {
    opacity: 0;
  }
}
</style>
