/** @type {import('vue-router').RouterOptions['routes']} */
import HelloWorld from './components/HelloWorld.vue'

export const routes = [
  { 
    path: '/', component: HelloWorld, name: "HelloWorld", 
    meta: { title: 'Home' } 
  },
]