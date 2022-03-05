import { RouteInterface } from "@/router";

export const adminRoutes = (requireAuthenticated: () => void): RouteInterface => {
    return {
        path: '/admin',
        redirect: {
            name: 'admin:schedule:search'
        },
        name: 'admin',
        component: () => import('@/containers/TheContainer.vue'),
        beforeEnter: requireAuthenticated,
        children: [
            {
                path: 'price/edit/:id',
                name: 'admin:price:edit',
                meta: {
                    label: 'Edit Price'
                },
                component: () => import('@/views/admin/price/TheEdit.vue')
            },
            {
                path: 'price/search',
                name: 'admin:price:search',
                meta: {
                    label: 'Search Prices'
                },
                component: () => import('@/views/admin/price/TheSearch.vue')
            },
            {
                path: 'schedule/create',
                name: 'admin:schedule:create',
                meta: {
                    label: 'Create Schedule'
                },
                component: () => import('@/views/admin/schedule/TheCreate.vue')
            },
            {
                path: 'schedule/edit/:id',
                name: 'admin:schedule:edit',
                meta: {
                    label: 'Edit Schedule'
                },
                component: () => import('@/views/admin/schedule/TheEdit.vue')
            },
            {
                path: 'schedule/search',
                name: 'admin:schedule:search',
                meta: {
                    label: 'Search Schedule'
                },
                component: () => import('@/views/admin/schedule/TheSearch.vue')
            }
        ]
    };
};
