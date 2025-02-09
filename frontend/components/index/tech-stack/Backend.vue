<template>
  <div class="grid place-content-center p-6">
    backend & databases
    <IconCloud aria-label="backend & databases" :images="imageUrls" />
  </div>
</template>

<script setup lang="ts">
const slugs = [
  "postgresql",
  "jest",
  "nodedotjs",
  "express",
  "nestjs",
  "socketdotio",
  "typeorm",
  "prisma",
  "typescript",
  "openapiinitiative",
  "mariadb",
  "redis",
  "rabbitmq",
];

const imageUrls = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);
</script>