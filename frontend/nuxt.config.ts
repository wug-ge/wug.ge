// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  routeRules: {
    "/api/": {
      proxy:
        process.env.NODE_ENV === "development"
          ? `http://localhost:3000/**`
          : `https://wug.ge/api/**`,
    },
    "/api/contact/**": {
      proxy:
        process.env.NODE_ENV === "development"
          ? `http://localhost:3000/**`
          : `https://wug.ge/api/**`,
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@kgierke/nuxt-matomo",
    "@nuxtjs/seo",
    "@nuxt/image",
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
  },

  site: {
    url: "https://wug.ge",
  },
});
