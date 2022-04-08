import { RouteInterface } from "@/router";

export const clientRoutes = (): RouteInterface => {
    return {
        path: '/',
        redirect: {
            name: 'client:home'
        },
        name: 'dashboard',
        component: () => import('@/containers/TheContainerUnauthenticated.vue'),
        children: [
            {
                path: 'contact',
                name: 'client:contact',
                meta: {
                    label: 'Contact Us'
                },
                component: () => import('@/views/client/contact/TheContact.vue')
            },
            {
                path: 'contact/thanks',
                name: 'client:contact:thanks',
                meta: {
                    label: 'Thank you'
                },
                component: () => import('@/views/client/contact/TheThank.vue')
            },
            {
                path: 'courses',
                name: 'client:courses',
                meta: {
                    label: 'Courses'
                },
                component: () => import('@/views/client/course/TheCourse.vue')
            },
            {
                path: 'courses/brc',
                name: 'client:courses:brc',
                meta: {
                    label: 'Basic Rider Course'
                },
                component: () => import('@/views/client/course/TheBrc.vue')
            },
            {
                path: 'courses/erc',
                name: 'client:courses:erc',
                meta: {
                    label: 'Experienced Rider Course'
                },
                component: () => import('@/views/client/course/TheErc.vue')
            },
            {
                path: 'courses/3wbrc',
                name: 'client:courses:3wbrc',
                meta: {
                    label: 'Three-Wheel Basic Rider Course'
                },
                component: () => import('@/views/client/course/The3Wbrc.vue')
            },
            {
                path: 'courses/kickstart',
                name: 'client:courses:kickstart',
                meta: {
                    label: 'Kickstart Course'
                },
                component: () => import('@/views/client/course/TheKickstart.vue')
            },
            {
                path: 'courses/private',
                name: 'client:courses:private',
                meta: {
                    label: 'Private Lessons'
                },
                component: () => import('@/views/client/course/ThePrivate.vue')
            },
            {
                path: 'faq',
                name: 'client:faq',
                meta: {
                    label: 'FAQ'
                },
                component: () => import('@/views/client/TheFaq.vue')
            },
            {
                path: 'home',
                name: 'client:home',
                meta: {
                    label: 'Home'
                },
                component: () => import('@/views/client/TheHome.vue')
            },
            {
                path: 'register/:id?',
                name: 'client:register',
                meta: {
                    label: 'Register'
                },
                component: () => import('@/views/client/register/TheRegister.vue')
            },
            {
                path: 'register/confirmation/:class_type',
                name: 'client:register:confirmation',
                meta: {
                    label: 'Registration Confirmation'
                },
                component: () => import('@/views/client/register/TheConfirmation.vue')
            },
            {
                path: 'schedule',
                name: 'client:schedule',
                meta: {
                    label: 'Schedule'
                },
                component: () => import('@/views/client/TheSchedule.vue')
            }
        ]
    };
};
