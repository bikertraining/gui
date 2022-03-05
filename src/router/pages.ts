import { RouteInterface } from "@/router";

export const pagesRoutes = (redirectLogout: () => void, requireUnauthenticated: () => void): RouteInterface => {
    return {
        path: '/pages',
        redirect: {
            name: 'pages:login'
        },
        name: 'pages',
        component: () => import('@/containers/TheContainerPages.vue'),
        children: [
            {
                path: 'login',
                name: 'pages:login',
                meta: {
                    label: 'Login'
                },
                beforeEnter: requireUnauthenticated,
                component: () => import('@/views/pages/TheLogin.vue')
            },
            {
                path: 'logout',
                name: 'pages:logout',
                beforeEnter: redirectLogout,
                component: () => import('@/views/pages/TheLogin.vue')
            },
        ]
    };
};
