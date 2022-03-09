const SitemapPlugin = require('sitemap-webpack-plugin').default;

const paths = [
    {
        path: '/',
        lastmod: new Date().toISOString().slice(0,10),
        priority: 1.0,
        changefreq: 'hourly'
    },
    {
        path: '/#/register',
        lastmod: new Date().toISOString().slice(0,10),
        priority: 0.9,
        changefreq: 'hourly'
    },
    {
        path: '/#/schedule',
        lastmod: new Date().toISOString().slice(0,10),
        priority: 0.8,
        changefreq: 'hourly'
    },
    {
        path: '/#/courses',
        lastmod: new Date().toISOString().slice(0,10),
        priority: 0.7,
        changefreq: 'daily'
    },
    {
        path: '/#/faq',
        lastmod: new Date().toISOString().slice(0,10),
        priority: 0.6,
        changefreq: 'daily'
    },
    {
        path: '/#/contact',
        lastmod: new Date().toISOString().slice(0,10),
        priority: 0.5,
        changefreq: 'monthly'
    },
    {
        path: '/#/map',
        lastmod: new Date().toISOString().slice(0,10),
        priority: 0.4,
        changefreq: 'monthly'
    },
    {
        path: '/#/coaches',
        lastmod: new Date().toISOString().slice(0,10),
        priority: 0.3,
        changefreq: 'monthly'
    }
];

module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = process.env.VUE_APP_API_TITLE;

                return args;
            });
    },
    configureWebpack: {
        plugins: [
            new SitemapPlugin({ base: process.env.VUE_APP_GUI_URL, paths })
        ]
    }
}