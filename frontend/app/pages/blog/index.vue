<template>
  <div>
    <IndexPageHeader />
    <!-- purely shown to have more page height, remove if naturally more -->
    <BlogContent v-if="articles && articles.length > 0">
      <div
        class="container p-10"
        v-for="article in reverseArticles"
        :key="article.path"
      >
        <NuxtLink :to="article.path">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </NuxtLink>
      </div>
    </BlogContent>
  </div>
</template>

<script setup lang="ts">
interface Article {
  path: string
  title: string
  description?: string
  [key: string]: any
}

const { data: articles } = await useAsyncData('blog-list', () =>
  queryCollectionNavigation('content', [ 'description', 'date' ]).order('date', 'DESC')
)

const reverseArticles = computed(() => {
  if (!articles.value) return []
  return articles.value[0].children?.reverse() as Article[]
})

</script>