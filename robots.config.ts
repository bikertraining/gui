export default [
    { UserAgent: '*' },
    { Allow: '/' },
    { Disallow: '/admin/' },
    { Disallow: '/callus' },
    { Disallow: '/contact/confirmation' },
    { Disallow: '/contact/unsubscribe/confirmation' },
    { Disallow: '/payment/' },
    { Disallow: '/team/confirmation' },

    { BlankLine: true },

    { Comment: 'Sitemap' },
    { Sitemap: (req: { headers: { host: any; }; }) => `https://${req.headers.host}/sitemap.xml` }
];