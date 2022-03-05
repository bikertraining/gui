import { RouteInterface } from "@/router";

export const errorRoutes = (): RouteInterface => {
    return {
        path: '/error',
        redirect: {
            name: 'client:home'
        },
        name: 'error',
        component: () => import('@/containers/TheContainerError.vue'),
        children: [
            {
                path: '403',
                name: 'error:403',
                meta: {
                    label: '403'
                },
                component: () => import('@/views/error/TheError403.vue')
            },
            {
                path: '404',
                name: 'error:404',
                meta: {
                    label: '404'
                },
                component: () => import('@/views/error/TheError404.vue')
            },
            {
                path: '408',
                name: 'error:408',
                meta: {
                    label: '408'
                },
                component: () => import('@/views/error/TheError408.vue')
            },
            {
                path: '500',
                name: 'error:500',
                meta: {
                    label: '500'
                },
                component: () => import('@/views/error/TheError500.vue')
            }
        ]
    };
};
