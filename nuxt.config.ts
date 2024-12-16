export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
  },
  routeRules: {
    '/': { prerender: true }
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  experimental: {
    payloadExtraction: false
  },
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      theme: {
        default: 'github-dark'
      },
    },
    markdown: {
      anchorLinks: false
    }
  }
})
