export default [
    { UserAgent: '*' },
    { Allow: '/' },

    { BlankLine: true },

    { Comment: 'Sitemap' },
    { Sitemap: (req: { headers: { host: any; }; }) => `https://${req.headers.host}/sitemap.xml` }
];