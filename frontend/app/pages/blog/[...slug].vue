<template>
  <div>
    <index-page-header />
    <blog-content>
      <ContentRenderer v-if="page" :value="page" />
    </blog-content>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('content').path(route.path).first()
)
</script>

<style lang="scss">
a.blog-link {
  @apply text-clip !text-error;
}
</style>