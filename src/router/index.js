import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    },
    {
        path: '/project',
        name: 'project',
        component: () => import ('@/views/ProjectPage.vue')
    },
    {
        path: '/project-details',
        name: 'project details',
        component: () => import ('@/views/ProjectDetailsPage.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import ('@/views/BlogPage.vue')
    },
    {
        path: '/BlogDetails',
        name: 'blog details',
        component: () => import ('@/views/BlogDetailsPage.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import ('@/views/Page404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
