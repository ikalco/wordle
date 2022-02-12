<template>
  <div class="popupContainer">
    <Popup
      v-for="(popup, index) in popups"
      :key="index"
      :value="popup[0]"
      :fade="popup[1]"
      :identifier="popup[2]"
      @deletepopup="deletePopup($event)"
      @click="resetGame(popup[1])"
    ></Popup>
  </div>
</template>

<script>
import Popup from "./Popup.vue";

export default {
  name: "PopupHandler",
  components: {
    Popup,
  },
  data() {
    return {
      popups: [],
    };
  },
  methods: {
    addPopup(popup) {
      this.popups.push([...popup, Math.random()]);
    },
    deletePopup(popup) {
      this.popups.splice(this.popups.indexOf(popup), 1);
    },
    resetGame(popup) {
      if (popup == false) {
        this.$emit("reset");
      }
    },
    resetState() {
      this.popups = [];
    },
  },
};
</script>

<style scoped>
div.popupContainer {
  position: absolute;
  top: 7%;

  width: 100%;
}
</style>
