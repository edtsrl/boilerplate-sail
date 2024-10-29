/// <reference types="vite/client" />
/// <reference types="node" />

export { }

declare global {
    interface Window {
        axios: any
        Cookie: any
        HtmlRoot: any
        lazyLoadInstance: any
        Lenis: any
        ScrollTrigger: any
    }
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'

    const component: DefineComponent<object, object, any>
    export default component
}

// import { NuxtCookies } from "./index";
//
// // augment typings of Vue.js
// import "./vue";
//
// declare module "vue/types/vue" {
//   interface Vue {
//     $cookies: NuxtCookies;
//   }
// }
//
// declare module 'vuex/types/index' {
//   interface Store<S> {
//     $cookies: NuxtCookies
//   }
// }
