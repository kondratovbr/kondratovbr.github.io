const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: require('fast-glob').sync([
        "./index.html",
        "./**/*.html",
        "./source/**/*.css",
        "./source/**/*.pcss",
    ]),

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                serif: ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
            },
        },

        debugScreens: {
            position: ['bottom', 'left'],
        },
    },

    plugins: [
        require('tailwindcss-debug-screens'),
    ],
}
