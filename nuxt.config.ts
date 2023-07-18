// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
  ],
  content: {
    documentDriven: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true }
})
