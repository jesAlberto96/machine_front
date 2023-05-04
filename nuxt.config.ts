// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/css/main.css', '@/node_modules/bootstrap/dist/css/bootstrap.min.css'],

    app: {
        head: {
          script: [{ src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js' }],
        },
    },

    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
          apiBase: '/api'
        },
    },

    
})
