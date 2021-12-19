<template>
  <div class="blog-content bg-secondary text-primary justify-center items-center">
    <slot></slot>
  </div>
</template>


<style lang="scss">
.blog-content {
  h1 {
    @apply text-2xl;
  }
}
</style>