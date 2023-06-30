export default defineNuxtConfig({
    // @ts-ignore
    app: {
        head: {
            link: [
                {
                    rel: 'preload',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css',
                    as: 'style'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css'
                }
            ],
            script: [
                {
                    rel: 'preload',
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js'
                },
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js',
                }
            ]
        }
    },
    auth: {
        baseURL: `${process.env.NUXT_PUBLIC_API_URL}dj-rest-auth/`,
        globalAppMiddleware: {
            allow404WithoutAuth: true,
            isEnabled: true
        },
        isEnabled: true,
        provider: {
            endpoints: {
                getSession: { path: '/user/', method: 'get' },
                signIn: { path: '/api-token-auth/', method: 'post' },
                signOut: { path: '/logout/', method: 'post' }
            },
            pages: {
                login: '/admin/auth'
            },
            token: {
                headerName: 'Authorization',
                maxAgeInSeconds: 3600,
                signInResponseTokenPointer: '/token/key',
                type: 'Token'
            },
            type: 'local'
        },
        session: {
            enableRefreshOnWindowFocus: true,
            enableRefreshPeriodically: false
        }
    },
    devtools: {
        enabled: true
    },
    gtag: {
        id: process.env.NUXT_PUBLIC_GOOGLE_TAG,
        loadingStrategy: 'defer'
    },
    modules: [
        '@nuxtjs/robots',
        '@sidebase/nuxt-auth',
        '@vee-validate/nuxt',
        'dayjs-nuxt',
        'nuxt-gtag',
        'nuxt-simple-sitemap'
    ],
    runtimeConfig: {
        public: {
            api_title: process.env.NUXT_PUBLIC_API_TITLE,
            api_url: process.env.NUXT_PUBLIC_API_URL,
            business_email: process.env.NUXT_PUBLIC_BUSINESS_EMAIL,
            business_phone: process.env.NUXT_PUBLIC_BUSINESS_PHONE,
            gui_url: process.env.NUXT_PUBLIC_GUI_URL
        }
    },
    sitemap: {
        exclude: [
            '/admin/**',
            '/contact/confirmation',
            '/payment/**',
            '/team/confirmation'
        ],
        siteUrl: process.env.NUXT_PUBLIC_GUI_URL,
        xsl: false
    }
});
