<template>
  <header class="container bg-white grid grid-cols-6 py-16 items-center relative overflow-hidden">
    <img class="z-10 col-span-6 md:col-span-2 w-64 mx-auto md:mb-0 mb-4 rounded-xl" src="~/assets/img/profile.jpg"
      alt="Profile Picture" />
    <div class="text-accent-1 col-span-6 md:col-span-4 text-3xl md:text-5xl text-center relative">
      <ClientOnly>
        <div class="absolute w-full max-h-[450px] overflow-hidden rounded-lg flex justify-center items-center left-0 -top-40">
          <FlickeringGrid
            class="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
            :square-size="4" :grid-gap="6" color="#AFAFAF" :max-opacity="0.5" :flicker-chance="0.1" :height="450" />
        </div>
      </ClientOnly>
      <h1 class="font-light">Hey, I'm Wugge and I'm a </h1>
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