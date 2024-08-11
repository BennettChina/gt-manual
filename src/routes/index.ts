import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"
import captchaRoutes from "@/routes/captcha.ts";


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        meta: {title: "Home"},
        component: () => import('@/views/home.vue')
    },
    ...captchaRoutes,
    {
        path: '/:catchAll(.*)',
        name: '404',
        meta: {title: '404'},
        component: () => import('@/views/not-found.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _from, next) => {
    document.title = <string>to.meta.title;
    next();
})

export default router;
