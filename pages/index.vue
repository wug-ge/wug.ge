<template>
  <div>
    <navigation />
    <page-header />
    <tech-stack />
    <page-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Navigation from '@/components/main-page-components/Navigation.vue'
import PageHeader from '@/components/main-page-components/PageHeader.vue'
import TechStack from '@/components/main-page-components/TechStack.vue'
import PageFooter from '~/components/main-page-components/PageFooter.vue'

@Component({
  components: {
    Navigation,
    PageHeader,
    TechStack,
    PageFooter
  }
})
export default class Index extends Vue {

}
</script>

<style lang="scss">
</style>