// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],

    i18n: {
      defaultLocale: 'es',
      strategy: 'prefix_except_default', // / for ES, /en for English
      locales: [
        { code: 'es', name: 'Español', file: 'es.json' },
        { code: 'en', name: 'English', file: 'en.json' },
      ],
      langDir: 'locales/',
    },



    app: {
      head: {
        title: 'Amatl Handmade Studio',
        meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      },
      baseURL: '/',
      buildAssetsDir: '/_nuxt/'
  },


})
