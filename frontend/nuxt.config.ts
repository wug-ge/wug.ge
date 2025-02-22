// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  ssr: true,

  build: {
    transpile: [
      'tslib', // https://github.com/nuxt/nuxt/discussions/21533#discussioncomment-6204075
      /echarts/,
      "vue-echarts",
      "resize-detector", // needed for echarts, see https://github.com/nuxt/nuxt/issues/14553#issuecomment-1934042981
    ]
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
          ? `http://localhost:3000/contact/**`
          : `https://wug.ge/api/contact/**`,
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@kgierke/nuxt-matomo",
    "@nuxtjs/seo",
    "@nuxt/image",
    "nuxt-site-config",
    "@nuxt/test-utils/module",
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