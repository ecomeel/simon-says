<script setup>
import Simon from "./components/Simon.vue";
import Info from "./components/Info.vue";
import Options from "./components/Options.vue";
</script>

<template>
  <div class="container">
    <h1 class="title">Simon Says</h1>
    <Simon />
    <Info />
    <Options />
  </div>
</template>

<style scoped>
.title {
  text-align: center;
}
</style>
