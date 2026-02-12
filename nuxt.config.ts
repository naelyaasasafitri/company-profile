// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/eslint',
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en-US.ts',
      },
      {
        code: 'id',
        name: 'Bahasa Indonesia',
        file: 'id-ID.ts',
      },
    ],
    lazy: true,
    langDir: 'i18n/locales/',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Tech Company - Modern Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Leading tech company providing innovative solutions for modern businesses.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  tailwindcss: {
    viewer: false,
  },
})
