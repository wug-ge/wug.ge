<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>

useHead
({
  titleTemplate
: (titleChunk
) => {
    return titleChunk
 ? titleChunk : '🕸️-dev by Wugge';
  }
})
</script>


<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  filter: blur(0.3rem);
}
</style>
