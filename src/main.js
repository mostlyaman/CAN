import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import { routes } from './routes'

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes
})

new WaveUI(app, {})

app.use(router).mount('#app')
