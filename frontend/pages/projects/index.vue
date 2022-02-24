<template>
  <div>
    <navigation />
    <page-header />
    <my-projects />
    <page-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Navigation from '@/components/main-page-components/Navigation.vue'
import PageHeader from '@/components/main-page-components/PageHeader.vue'
import MyProjects from '@/components/projects/MyProjects.vue'
import PageFooter from '~/components/main-page-components/PageFooter.vue'

@Component({
  components: {
    Navigation,
    PageHeader,
    MyProjects,
    PageFooter
  }
})
export default class Index extends Vue {

}
</script>