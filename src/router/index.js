import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/AboutPage.vue'
import AboutPage from '../views/Homepage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
