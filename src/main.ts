import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'

// Create VueI18n instance with options
// const i18n = new VueI18n({
//   locale: 'en', // set locale
//   messages: {
//     "en": {
//       helloWorld: "Hello world!"
//     },
//     "ja": {
//       helloWorld: "こんにちは、世界！"
//     }
//   } // set locale messages
// })

createApp(App).use(VueI18n).use(store).use(router).mount('#app')
