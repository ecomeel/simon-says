<script>
export default {};
</script>
<template>
  <section class="options">
    <h3 class="title">Game mode:</h3>
    <label>
      <input class="gameMode" type="radio" value="easy" name="mode" />
      Easy
    </label>
    <label>
      <input class="gameMode" type="radio" value="normal" name="mode" checked />
      Normal
    </label>
    <label>
      <input class="gameMode" type="radio" value="hard" name="mode" />
      Hard
    </label>
  </section>
</template>
<style scoped>
.options {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.title {
  margin-bottom: 0;
  font-size: 25px;
}
label {
  font-size: 20px;
}
</style>
