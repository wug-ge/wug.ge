<template>
  <div class="grid place-content-center p-6">
    frontend
    <IconCloud aria-label="frontend" :images="imageUrls" />
  </div>
</template>

<script setup lang="ts">
const slugs = [
  "typescript",
  "vuedotjs",
  "vuetify",
  "nuxt",
  "tailwindcss",
  "sass",
  "cypress",
  "sentry",
  "zod",
  "vite",
  "webpack",
  "postcss",
  "babel",
  "eslint",
];

const imageUrls = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);
</script>