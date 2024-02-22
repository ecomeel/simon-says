<script>
import Simon from "./Simon.vue";
import Info from "./Info.vue";
import Options from "./Options.vue";
export default {
  data() {
    return {
      sequence: [],
      copySequence: [],
      repeat: [],
      round: 0,
      active: false,
      isEndGame: false,
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
      this.copySequence = [];
      this.repeat = [];
      this.round = 0;
      this.active = true;
      this.isEndGame = false;

      // hide loose
      this.newRound();
    },
    newRound() {
      setTimeout(() => {
        this.round++;
        this.isEndGame = false;
        this.sequence.push(this.getRandomNumber());
        this.copy = this.sequence.slice(0);
        console.log(this.copy);
        this.animate(this.sequence);
      }, 200);
    },

    animate(sequence) {
      let i = 0;
      let interval = setInterval(() => {
        // play sound
        this.lightUp(sequence[i]);
        i++;
        if (i >= sequence.length) {
          clearInterval(interval);
          this.activatePLayboard();
        }
      }, 500);
    },
    activatePLayboard() {
      const tilesNodes = document.querySelectorAll(".tile");
      for (const node of tilesNodes) {
        node.classList.add("active-tile");
        node.onclick = () => {
          this.handleClick(node);
          node.classList.add("flash");
          setTimeout(() => {
            node.classList.remove("flash");
          }, 300);
          //playsound
        };
      }
    },
    deactivatePlayboard() {
      const tilesNodes = document.querySelectorAll(".tile");
      for (const node of tilesNodes) {
        node.classList.remove("active-tile");
        node.onclick = function () {};
      }
    },
    handleClick(node) {
      const actualResponse = node.dataset.tile;
      const desiredResponse = this.copy.shift();
      this.active = actualResponse == desiredResponse;
      this.checkLose();
    },
    checkLose() {
      if (this.copy.length == 0 && this.active) {
        console.log("new round");
        this.deactivatePlayboard();
        this.newRound();
      } else if (!this.active) {
        this.deactivatePlayboard();
        this.isEndGame = true;
      }
    },

    lightUp(tile) {
      const tileNode = document.querySelectorAll(".tile")[tile - 1];
      tileNode.classList.add("flash");
      setTimeout(() => {
        tileNode.classList.remove("flash");
      }, 300);
    },
    getRandomNumber() {
      return Math.floor(Math.random() * 4 + 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <h1 class="title">Simon Says</h1>
    <Simon />
    <Info
      :round="round"
      :isEnd="isEndGame"
      :onStartBtnClicked="startGame"
    />
    <Options />
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 45px;
  text-align: center;
}
</style>

<!-- Сделать курсор не поинтер при выключенном playground. 
  Сделать проигрыш. 
  Сделать sound
  Сделать уровни сложности -->
