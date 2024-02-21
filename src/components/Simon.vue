<script>
export default {
  data() {
    return {};
  },
  props: ["onPieceClick"],
};
</script>
<template>
  <section class="simon">
    <ul>
      <li @click="onPieceClick" class="red tile"></li>
      <li @click="onPieceClick" class="blue tile"></li>
      <li @click="onPieceClick" class="yellow tile"></li>
      <li @click="onPieceClick" class="green tile"></li>
    </ul>
  </section>
</template>
<style scoped>
.simon {
  margin-right: 50px;
  position: relative;
  width: 302px;
  height: 295px;
  float: left;
  background-color: #fff;
  box-shadow: 2px 1px 12px #aaa;
  border-radius: 150px;
}
ul,
li {
  padding: 0;
  margin: 0;
}
ul {
  margin-left: 3px;
  list-style: none;
}
.tile {
  opacity: 0.6;
  height: 295px;
  position: absolute;
  border-radius: 150px;
  cursor: pointer;
}
.red {
  background-color: rgb(255, 88, 88);
  clip: rect(0, 300px, 150px, 150px);
  width: 296px;
}
.blue {
  background-color: rgb(96, 96, 255);
  clip: rect(0, 150px, 150px, 0);
  width: 300px;
}
.yellow {
  background-color: rgb(253, 253, 109);
  clip: rect(150px, 150px, 300px, 0);
  width: 300px;
}
.green {
  background-color: rgb(124, 175, 124);
  clip: rect(150px, 300px, 300px, 150px);
  width: 296px;
}
</style>
