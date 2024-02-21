<script>
export default {};
</script>
<template>
  <div class="simon">
    <ul>
      <li class="red piece"></li>
      <li class="blue piece"></li>
      <li class="yellow piece"></li>
      <li class="green piece"></li>
    </ul>
  </div>
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
.piece {
  height: 295px;
  position: absolute;
  border-radius: 150px;
}
.red {
  background-color: red;
  clip: rect(0, 300px, 150px, 150px);
  width: 296px;
}
.blue {
  background-color: blue;
  clip: rect(0, 150px, 150px, 0);
  width: 300px;
}
.yellow {
  background-color: yellow;
  clip: rect(150px, 150px, 300px, 0);
  width: 300px;
}
.green {
  background-color: green;
  clip: rect(150px, 300px, 300px, 150px);
  width: 296px;
}
</style>
