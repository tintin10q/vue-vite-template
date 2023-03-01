import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'

import "@total-typescript/ts-reset";
import './assets/main.css'
import {autoAnimatePlugin} from "@formkit/auto-animate/vue";

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(router)
app.use(Notifications)
app.use(autoAnimatePlugin)

app.mount('#app')
