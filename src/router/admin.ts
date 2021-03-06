import { RouteInterface } from "@/router";

export const adminRoutes = (requireAuthenticated: () => void): RouteInterface => {
    return {
        path: '/admin',
        redirect: {
            name: 'admin:schedule:search'
        },
        name: 'admin',
        component: () => import('@/containers/TheContainerAuthenticated.vue'),
        beforeEnter: requireAuthenticated,
        children: [
            {
                path: 'coach/create',
                name: 'admin:coach:create',
                meta: {
                    label: 'Create Coach'
                },
                component: () => import('@/views/admin/coach/TheCreate.vue')
            },
            {
                path: 'coach/edit/:id',
                name: 'admin:coach:edit',
                meta: {
                    label: 'Edit Coach'
                },
                component: () => import('@/views/admin/coach/TheEdit.vue')
            },
            {
                path: 'coach/search',
                name: 'admin:coach:search',
                meta: {
                    label: 'Search Coach'
                },
                component: () => import('@/views/admin/coach/TheSearch.vue')
            },
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
