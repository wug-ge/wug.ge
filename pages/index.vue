<template>
  <div>
    <navigation />
    <page-header />
    <tech-stack />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Navigation from '@/components/main-page-components/Navigation.vue'
import PageHeader from '@/components/main-page-components/PageHeader.vue'
import TechStack from '@/components/main-page-components/TechStack.vue'


@Component({
  components: {
    Navigation,
    PageHeader,
    TechStack
  }
})
export default class Index extends Vue {

}
</script>

<style lang="scss">
</style>