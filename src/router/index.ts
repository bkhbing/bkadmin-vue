import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '主页',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('../layout/Index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router