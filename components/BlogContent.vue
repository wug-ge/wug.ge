<template>
  <div class="blog-content bg-accent-2 text-primary flex items-center justify-center items-center">
    <div class="container pt-20 pb-20 lg:p-20 md:p-10 p-4">
      <slot></slot>
    </div>
  </div>
</template>


<style lang="scss">
.blog-content {
  .nuxt-content {
    font-size: 1.25rem;
  }
  h1 {
    @apply text-5xl text-primary;
  }
  h2 {
    @apply text-3xl;
  }
  ul {
    list-style-type: square;
    list-style-position: inside;
    li {
      ul {
        li {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>