// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@unocss/nuxt',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  routeRules: {
    '/components': { redirect: '/components/accordion' },
    '/settings': { redirect: '/settings/profile' },
  },

  imports: {
    dirs: [
      './lib',
    ],
  },

  i18n: {
    locales: [
      { code: 'uz', iso: 'uz-UZ', file: 'uz.js', name: "O'zbekcha" },
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.js', name: 'Русский' }
    ],
    defaultLocale: 'uz',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'lang/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },

  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  },

  compatibilityDate: '2024-12-14',
})
