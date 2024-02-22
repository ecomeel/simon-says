<script>
import Simon from "./Simon.vue";
import Info from "./Info.vue";
import Options from "./Options.vue";

export default {
  data() {
    return {
      gameModes: {
        easy: 1500,
        normal: 1000,
        hard: 400,
      },
      sequence: [],
      copySequence: [],
      repeat: [],
      round: 0,
      active: false,
      isEndGame: false,
      selectedGameMode: 1000,
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
      this.setGameMode();
      this.newRound();
    },
    newRound() {
      setTimeout(() => {
        this.round++;
        this.isEndGame = false;
        this.sequence.push(this.getRandomNumber());
        this.copy = this.sequence.slice(0);
        this.animate(this.sequence);
      }, 200);
    },
    setGameMode() {
      const gameModesNodes = document.querySelectorAll(".gameMode");
      for (const gameMode of gameModesNodes) {
        if (gameMode.checked) {
          this.selectedGameMode = this.gameModes[gameMode.value];
        }
      }
    },
    animate(sequence) {
      let i = 0;
      let interval = setInterval(() => {
        this.playSound(sequence[i]);
        this.lightUp(sequence[i]);
        i++;
        if (i >= sequence.length) {
          clearInterval(interval);
          this.activatePLayboard();
        }
      }, this.selectedGameMode + 100);
    },
    activatePLayboard() {
      const tilesNodes = document.querySelectorAll(".tile");
      for (const node of tilesNodes) {
        node.classList.add("active-tile");
        node.onclick = () => {
          this.handleClick(node);
          node.classList.add("flash");
          this.playSound(node.dataset.tile);
          setTimeout(() => {
            node.classList.remove("flash");
          }, 300);
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
      }, this.selectedGameMode);
    },
    playSound(number) {
      const audio = new Audio(`/sounds/${number}.mp3`);
      audio.play();
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
    <Info :round="round" :isEnd="isEndGame" :onStartBtnClicked="startGame" />
    <Options />
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 45px;
  text-align: center;
}
</style>
