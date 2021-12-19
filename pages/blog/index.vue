<template>
  <div>
    <navigation />
    <page-header />
    <blog-content>
      <div class="container p-10" v-for="(doc, i) in docs" :key="i">
        <nuxt-link :to="`/blog/${doc.slug}`">
          <h1 class="text-2xl">{{doc.title}}</h1>
          {{ doc.description }}
        </nuxt-link>
      </div>
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
    const docs = await $content(params.slug || 'blog').fetch()
    return { docs }
  }
})
export default class Blog extends Vue {
}

</script>