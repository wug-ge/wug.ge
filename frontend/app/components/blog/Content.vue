<template>
  <div
    class="blog-content bg-slight-grey text-accent-1 font-light flex justify-center items-center"
  >
    <div class="container pt-20 pb-20 lg:p-20 md:p-10 p-4 text-xl">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.blog-content {
  a {
    @apply text-accent-1;
    h2, p {
      @apply text-accent-1;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      @apply text-accent-1 no-underline;
    }
  }
  h1 {
    @apply text-4xl text-accent-1;
    &:not(.list-heading) {
      @apply text-5xl text-accent-1;
    }
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
  code {
    display: block;
    overflow: scroll;
    @apply bg-secondary p-2;
  }
}
</style>
