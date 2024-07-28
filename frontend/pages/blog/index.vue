<template>
  <div>
    <index-page-header />
    <!-- purely shown to have more page height, remove if naturally more -->
    <blog-content>
      <ContentList path="/blog" v-slot="{ list }">
        <div
          class="container p-10"
          v-for="article in list"
          :key="article._path"
        >
          <nuxt-link :to="article._path">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </nuxt-link>
        </div>
      </ContentList>
    </blog-content>
  </div>
</template>
