<template>
  <div>
    <navigation />
    <page-header />
    <tech-stack />
    <imprint />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Navigation from '@/components/main-page-components/Navigation.vue'
import PageHeader from '@/components/main-page-components/PageHeader.vue'
import TechStack from '@/components/main-page-components/TechStack.vue'
import Imprint from '@/components/main-page-components/Imprint.vue'

@Component({
  components: {
    Navigation,
    PageHeader,
    TechStack,
    Imprint
  }
})
export default class Index extends Vue {

}
</script>

<style lang="scss">
</style>