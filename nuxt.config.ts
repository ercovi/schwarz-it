// https://nuxt.com/docs/api/configuration/nuxt-config

const isDev = process.env.APP_ENV == 'development'
const isProduction = process.env.APP_ENV == 'production'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@pinia/nuxt'],
    css: ['@/assets/styles/global.css'],
    dev: isDev,
    devtools: { enabled: isDev },
    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL,
        },
    },
    // experimental: {
    //     sharedPrerenderData: isProduction,
    // },
    // nitro: {
    //     routeRules: {
    //         // prerender all pages, full static
    //         '/**/**': { prerender: true },
    //     },
    // },
})