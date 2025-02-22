// https://nuxt.com/docs/api/configuration/nuxt-config

const isDev = process.env.APP_ENV == 'development'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
    css: ['@/assets/styles/global.css'],
    dev: isDev,
    devtools: { enabled: isDev },
})