// import resetStore from '@/src/plugins/resetStore'

import LazyLoad from 'vanilla-lazyload'
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
// eslint-disable-next-line ts/ban-ts-comment
import App from './App.vue'
import './bootstrap'
import registerComponents from './register'

export function initApp(): void {
    // const pinia = createPinia()
    const app = createApp({})

    app.use(registerComponents)
    // app.use(pinia.use(resetStore))
    app.provide('axios', app.config.globalProperties.axios)
    app.use(VueAxios, window.axios)
    app.component('vue-app', App)
    app.mount('#app')

    window.lazyLoadInstance = new LazyLoad({
        threshold: 0,
    })
}
