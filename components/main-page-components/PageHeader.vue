<template>
  <header class="bg-primary">
    <h1 class="text-secondary text-4xl md:text-9xl text-center pb-64 pt-64">🕸️-dev by Wugge</h1>
    <span class="text-xl text-center text-secondary">(this is all WIP please don't take it serious yet lol)</span>
    <canvas class="glslCanvas" data-fragment-url="/shaders/headerShader.frag"></canvas>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class PageHeader extends Vue {

}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 100;
  h1 {
    position: relative;
    z-index: 75; 
  }
  canvas {
    position: absolute;
    z-index: 50;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>