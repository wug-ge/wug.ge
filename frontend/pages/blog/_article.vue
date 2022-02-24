<template>
  <div>
    <navigation />
    <page-header />
    <blog-content>
      <nuxt-content :document="doc" />
    </blog-content>
    <page-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Navigation from '@/components/main-page-components/Navigation.vue'
import PageHeader from '@/components/main-page-components/PageHeader.vue'
import BlogContent from '@/components/BlogContent.vue'
import PageFooter from '~/components/main-page-components/PageFooter.vue'

@Component({
  components: {
    PageHeader,
    Navigation,
    PageFooter,
    BlogContent
  },
  async asyncData({ $content, params }) {
    const doc = await $content(`/blog/` + params.article).fetch()
    return { doc }
  }
})
export default class Article extends Vue {

}
</script>