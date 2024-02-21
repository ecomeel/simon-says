<script>
import Simon from "./Simon.vue";
import Info from "./Info.vue";
import Options from "./Options.vue";
export default {
  data() {
    return {
      sequence: [],
      repeat: [],
      round: 0,
    };
  },
  components: {
    Simon,
    Info,
    Options,
  },
  methods: {
    startGame() {
      this.sequence = [];
      this.repeat = [];
      this.round = 0;

      // hide loose
      this.newRound();
    },
    newRound() {
      this.round++;
      this.sequence.push(this.getRandomNumber());
      this.animate(this.sequence);
    },

    animate(sequence) {
      let i = 0;
      let interval = setInterval(() => {
        // play sound
        this.lightUp(sequence[i]);
        i++;
        if (i >= sequence.length) {
          clearInterval(interval);
          // ativate playboard
        }
      }, 500);
    },
    lightUp(tile) {
      console.log(tile);
      const tileNode = document.querySelectorAll(".tile")[tile - 1];
      tileNode.classList.add("flash");
      console.log(tileNode);
      setTimeout(() => {
        tileNode.classList.remove("flash");
      }, 300);
    },
    getRandomNumber() {
      return Math.floor(Math.random() * 4 + 1);
    },
    handlePieceClick(e) {
      const elementClicked = e.target;
      this.sequence.push(elementClicked.classList[0]);
      console.log(this.sequence);
    },
  },
};
</script>
<template>
  <div class="container">
    <h1 class="title">Simon Says</h1>
    <Simon :onPieceClick="handlePieceClick" />
    <Info :round="round" :onStartBtnClicked="startGame" />
    <Options />
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 45px;
  text-align: center;
}
</style>
