export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {
            aspectRatio: {
                'card': '7/10',
            }
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
}
    
