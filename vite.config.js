import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
    build: {
        cssCodeSplit: true,
        manifest: true,
        minify: true,
        reportCompressedSize: true,
    },
    optimizeDeps: {},
    plugins: [
        vue(),
        laravel({
            input: ['./resources/css/main.css', './resources/js/main.ts'],
            refresh: true,
        }),
        legacy({
            polyfills: true,
            targets: ['defaults', 'not IE 11'],
        }),
        nodePolyfills({
            protocolImports: true,
        }),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js',
            '@/': './resources/js/src',
        },
    },
})
