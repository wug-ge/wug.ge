<template>
  <div>
    <navigation />
    <page-header />
    <tech-stack />
    <transparency />
    <about-me />
    <page-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Navigation from '@/components/main-page-components/Navigation.vue'
import PageHeader from '@/components/main-page-components/PageHeader.vue'
import TechStack from '@/components/main-page-components/TechStack.vue'
import Transparency from '@/components/main-page-components/Transparency.vue'
import AboutMe from '@/components/main-page-components/AboutMe.vue'
import PageFooter from '~/components/main-page-components/PageFooter.vue'

@Component({
  components: {
    Navigation,
    PageHeader,
    TechStack,
    Transparency,
    AboutMe,
    PageFooter
  }
})
export default class Index extends Vue {

}
</script>

<style lang="scss">
</style>