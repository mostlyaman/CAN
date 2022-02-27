/** @type {import('vue-router').RouterOptions['routes']} */
import UserLogin from './components/UserLogin.vue'
import About from './components/About.vue'
import User from './components/User.vue'
import Post from './components/Post.vue'
import Child from './components/Child.vue'
import NotFound from './components/NotFound.vue'
import DB from './components/DB.vue'
export const routes = [
    {
          path: '/', redirect: {name: "userlogin"},
          meta: {title: ""}
    },
    { 
        path: '/login', component: UserLogin, name: "userlogin", 
        meta: { title: 'Login' , requiresAuth: false} 
    },
    {
        path: '/about', component: About, name: "About",
        meta: {title: 'About', requiresAuth : false}
    },
    {
        path: '/user', component: User, name: "User",
        meta: {title: 'Home', requiresAuth: false}
    },
    {
        path:'/:space/:child/:post', component:Post, name: "Post",
        meta: {title: "Post", requiresAuth: false}, params: true
    },
    {
        path:'/:space/:child', component: Child, name:"Child",
        meta: {title: "Topic", requiresAuth: false}, params: true,
    },
    {
        path:'/:space', component:DB, name:"DB",
        meta:{titile:"Space", requiresAuth:false}, params:true
    },
    { path: '/:path(.*)', component: NotFound },
]