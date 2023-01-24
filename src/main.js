import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import '@mdi/font/css/materialdesignicons.min.css'
import { routes } from './routes'

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(import.meta.env['BASE_URL']),
    routes
})

router.beforeEach((to) => {
    if(to.meta.requiresAuth){
        if(!window.user){
            return {
                path: "/login"
            }
        }
    }
    if(to.meta.title){
        document.title = "CAN - " + to.meta.title
    }
})

new WaveUI(app, {})

app.use(router).mount('#app')
//This is a comment.