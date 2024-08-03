<template>
  <header class="container bg-white grid grid-cols-6 py-16 items-center">
    <img
      class="col-span-2 w-64 mx-auto md:mb-0 mb-4 rounded"
      src="~/assets/img/profile.jpg"
      alt="Profile Picture" />
    <div class="text-accent-1 col-span-4 text-5xl md:text-5xl text-center">
      <h1 class="">Hey, I'm Wugge and I'm a </h1>
      <h1 id="typewriter"></h1>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Typewriter from 'typewriter-effect/dist/core';

onMounted(() => {
  if (!process.client) {
    return;
  }
  new Typewriter('#typewriter', {
    strings: ["TypeScript Expert", "Vue.js Guru", "Node.js lover", "Linux Enthusiast", "Freelancer"],
    autoStart: true, 
    loop: true,
  });
});
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 30;
  h1 {
    position: relative;
    z-index: 75; 
  }
}
</style>