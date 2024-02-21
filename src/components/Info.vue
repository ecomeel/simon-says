<script>
export default {
  props: ["round", 'onStartBtnClicked'],
};
</script>
<template>
  <section class="info">
    <h2 class="title">Round: {{ round }}</h2>
    <button @click="onStartBtnClicked" class="start-btn">Start</button>
  </section>
</template>
<style scoped>
.start-btn {
  padding: 10px 40px;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  background-color: rgb(103, 184, 172);
}
.start-btn:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
