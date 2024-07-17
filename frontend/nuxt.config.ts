// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  content: {
    highlight: {
      theme: "one-dark-pro",
      langs: ["javascript", "typescript", "json", "bash", "shell"],
    }
  }
})