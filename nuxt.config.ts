// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {
                    innerHTML: `
                        {
                          "@context": "https://schema.org",
                          "@type": "Organization",
                          "url": "${process.env.NUXT_PUBLIC_GUI_URL}",
                          "logo": "${process.env.NUXT_PUBLIC_GUI_URL}/img/bikertraining/logo_llc_color.png"
                        }
                    `,
                    type: 'application/ld+json'
                },
                {
                    innerHTML: `
                        {
                          "@context": "https://schema.org",
                          "@type": "School",
                          "image": [
                            "${process.env.NUXT_PUBLIC_GUI_URL}/img/bikertraining/logo_llc_color.png"
                           ],
                          "name": "Biker Training LLC",
                          "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "6385 Pensacola Blvd",
                            "addressLocality": "Pensacola",
                            "addressRegion": "FL",
                            "postalCode": "32505",
                            "addressCountry": "US"
                          },
                          "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 30.47919,
                            "longitude": -87.25403
                          },
                          "url": "${process.env.NUXT_PUBLIC_GUI_URL}",
                          "telephone": "+18504562277",
                          "openingHoursSpecification": [
                            {
                              "@type": "OpeningHoursSpecification",
                              "dayOfWeek": [
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                              ],
                              "opens": "9:00",
                              "closes": "19:00"
                            }
                          ]
                        }
                    `,
                    type: 'application/ld+json'
                },
                {
                    innerHTML: `
                        {
                          "@context": "https://schema.org/",
                          "@id": "${process.env.NUXT_PUBLIC_GUI_URL}",
                          "@type": "Course",
                          "name": "Motorcycle Endorsement",
                          "description": "Whether you are totally new to motorcycles, a returning rider or already experienced, we have a course to meet your needs. Our Basic RiderCourse meets the state of Florida license endorsement requirement.",
                          "publisher": {
                            "@type": "Organization",
                            "name": "Biker Training LLC",
                            "url": "${process.env.NUXT_PUBLIC_GUI_URL}"
                          },
                          "provider": {
                            "@type": "Organization",
                            "name": "Biker Training LLC",
                            "url": "${process.env.NUXT_PUBLIC_GUI_URL}"
                          },
                          "offers": [{
                            "@type": "Offer",
                            "category": "Paid",
                            "priceCurrency": "USD",
                            "price": 349.00
                          }],
                          "inLanguage": "en",
                          "coursePrerequisites": [
                            "MSF 5-hour eCourse",
                            "${process.env.NUXT_PUBLIC_GUI_URL}"
                          ],
                          "hasCourseInstance": [
                            {
                              "@type": "CourseInstance",
                              "courseMode": "Online",
                              "courseWorkload": "P2D"
                            }
                          ]
                        }
                    `,
                    type: 'application/ld+json'
                }
            ]
        }
    },
    auth: {
        baseURL: process.env.NUXT_PUBLIC_API_URL,
        globalAppMiddleware: {
            allow404WithoutAuth: true,
            isEnabled: true
        },
        isEnabled: true,
        provider: {
            endpoints: {
                getSession: {path: 'dj-rest-auth/user/', method: 'get'},
                signIn: {path: 'dj-rest-auth/api-token-auth/', method: 'post'},
                signOut: {path: 'dj-rest-auth/logout/', method: 'post'}
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
    compatibilityDate: '2024-04-03',
    css: [
        'bootstrap/dist/css/bootstrap.min.css'
    ],
    devtools: {
        enabled: true
    },
    bootstrapIcons: {
        display: "inline"
    },
    gtag: {
        id: process.env.NUXT_PUBLIC_GOOGLE_TAG,
        loadingStrategy: 'defer'
    },
    modules: [
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        '@sidebase/nuxt-auth',
        '@vee-validate/nuxt',
        'dayjs-nuxt',
        'nuxt-bootstrap-icons',
        'nuxt-gtag'
    ],
    robots: {
        credits: false,
        disallow: [
            '/admin/',
            '/callus',
            '/contact/confirmation',
            '/payment/',
            '/team/confirmation'
        ]
    },
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
        autoLastmod: true,
        credits: false,
        exclude: [
            '/admin/**',
            '/callus',
            '/contact/confirmation',
            '/contact/unsubscribe/confirmation',
            '/payment/**',
            '/team/confirmation'
        ],
        sitemapName: 'sitemap.xml',
        urls: [
            '/schedule'
        ],
        xslTips: false
    }
});