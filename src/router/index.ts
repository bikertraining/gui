import { useAuth } from "@/composables/auth";
import { adminRoutes } from "@/router/admin";
import { clientRoutes } from "@/router/client";
import { errorRoutes } from "@/router/error";
import { pagesRoutes } from "@/router/pages";
import { RendererElement } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export interface RouteInterface {
    path: string;
    redirect: {
        name: string;
    };
    name: string;
    component: RendererElement;
    beforeEnter?: () => void;
    children: Array<RouteRecordRaw>;
}

const requireAuthenticated = () => {
    const { globalAuth, initialize } = useAuth();

    initialize();

    if (globalAuth.token === '') {
        return router.push({ name: 'pages:login' });
    }
};

const redirectLogout = () => {
    const { removeToken } = useAuth();

    removeToken();

    return router.push({ name: 'pages:login' });
};

const requireUnauthenticated = () => {
    const { globalAuth, initialize } = useAuth();

    initialize();

    if (globalAuth.token !== '') {
        return router.push({ name: 'admin:schedule:search' });
    }
};

const routes: Array<RouteRecordRaw> = [
    {
        // will match everything and if it's not found, redirect to 404
        path: '/:pathMatch(.*)*',
        redirect: {
            name: 'error:404'
        }
    },
    adminRoutes(requireAuthenticated),
    clientRoutes(),
    errorRoutes(),
    pagesRoutes(redirectLogout, requireUnauthenticated)
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

router.afterEach((to) => {
    // @ts-ignore
    gtag('config', 'G-SG8DK19KYY', {
        page_path: to.fullPath,
        app_name: 'Biker Training',
        send_page_view: true
    });

    // @ts-ignore
    gtag('event', 'screen_view', {
        'app_name': 'Biker Training',
        'screen_name': to.meta.label
    });
});

export default router;
