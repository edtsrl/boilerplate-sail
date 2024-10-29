import headlessUI from '@headlessui/tailwindcss'
import tailwind3dTransformPlugin from '@xpd/tailwind-3dtransforms'

require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './utilities/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        '*.blade.php',
        './resources/**/*.{vue,js,ts,jsx,tsx}',
    ],
    corePlugins: {
        aspectRatio: false,
    },
    theme: {
        container: {
            screens: {},
        },
        extend: {
            content: {
                empty: '""',
            },
            fontFamily: {
            },
        },
    },
    plugins: [
        // containerQueries,
        require('@tailwindcss/aspect-ratio'),
        require('./resources/js/tailwind/fontVariationPlugin.js'),
        tailwind3dTransformPlugin,
        headlessUI({ prefix: 'ui' }),
    ],
}
