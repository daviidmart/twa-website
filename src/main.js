import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

import './assets/style/style.css'
import './assets/style/fonts.css'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/@egjs/vue3-flicking/dist/flicking.css'

const head = createHead()

createApp(App).use(router).use(head).mount('#app')
