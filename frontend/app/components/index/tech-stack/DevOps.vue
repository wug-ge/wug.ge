<template>
  <div class="grid place-content-center p-6">
    tooling
    <IconCloud aria-label="tooling" :images="imageUrls" />
  </div>
</template>

<script setup lang="ts">
const slugs = [
  "docker",
  "git",
  "github",
  "gitlab",
  "gitea",
  "jira",
  "clockify",
  "drone",
  "githubcopilot",
  "traefikproxy",
  "grafana",
  "keycloak",
  "uptimekuma",
  "cloudflare",
  "minio",
];

const imageUrls = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);
</script>