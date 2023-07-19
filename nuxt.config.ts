// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  nitro: {
    "preset": "cloudflare"
  },
  css: ['~/assets/css/main.css'],
  modules: [
    "@bg-dev/nuxt-naiveui",
    '@nuxt/content',
    'nuxt-icon'
  ],
  content: {
    documentDriven: true
  },
  naiveui: {
    colorModePreference: "light",
    iconSize: 18,
    themeConfig: {
      shared: {
        common: {
          primaryColor: '#F25739'
        }
      }
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true }
})
