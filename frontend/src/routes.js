import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/enterprise',
            name: 'enterprise',
            component: () => import('./components/Enterprise.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./components/About.vue')
        },
        {
            path: '/quick-start',
            name: 'quick-start',
            component: () => import('./components/Quick-start.vue')
        },
        {
            path: '/consulting-and-support',
            name: 'consulting-and-support',
            component: () => import('./components/Consulting-and-support.vue')
        }
    ]
})