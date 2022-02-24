<template>
  <header class="bg-accent-1">
    <h1 class="text-primary text-5xl md:text-6xl text-center pb-32 pt-32">Hey, I'm Wugge and I write code</h1>
    <!--<canvas class="glslCanvas" data-fragment-url="/shaders/headerShader.frag"></canvas>-->
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
  z-index: 30;
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