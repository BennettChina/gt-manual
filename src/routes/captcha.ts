import {RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/manual/captcha",
        name: "Captcha",
        meta: {title: "处理验证码"},
        component: () => import("@/views/captcha.vue"),
    },
];

export default routes;
