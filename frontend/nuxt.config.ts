// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@kgierke/nuxt-matomo",
    "@nuxtjs/seo"
  ],
  content: {
    highlight: {
      theme: "one-dark-pro",
      langs: ["javascript", "typescript", "json", "bash", "shell"],
    },
  },
  matomo: {
    host: "https://matomo.wug.ge",
    siteId: 1,
  }
})