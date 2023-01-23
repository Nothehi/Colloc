// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            title: 'ColloC',
            meta: [
                { name: 'author', content: 'Hossein Nodehi' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anton&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Patua+One&display=swap' },
            ],
        }
    },
})
