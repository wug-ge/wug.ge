<template>
  <div class="blog-content bg-accent-2 text-primary flex items-center justify-center items-center">
    <div class="container pt-20 pb-20 lg:p-20 md:p-10 p-4">
      <slot></slot>
    </div>
  </div>
</template>


<style lang="scss">
.blog-content {
  h1 {
    @apply text-4xl text-primary;
  }
  h2 {
    @apply text-xl;
  }
}
</style>