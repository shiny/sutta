// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  nitro: {
    "preset": "cloudflare"
  },
  css: ['~/assets/css/main.css'],
  modules: [
    "@bg-dev/nuxt-naiveui",
    '@nuxt/content',
    'nuxt-icon',
    '@nuxt/image',
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
  image: {
    provider: 'cloudimage',
    /**
     * You can register an account on cloudimage.io
     * 
     * Here is an example
     * source: https://hufasi.com/cover/xifangquezhi.jpg
     * destination: https://cthkthtwca.cloudimg.io/hufasi.com/cover/xifangquezhi.jpg?width=128
     */
    cloudimage: {
      baseURL: "hufasi.com",
      cdnURL: "https://cthkthtwca.cloudimg.io"
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true }
})
