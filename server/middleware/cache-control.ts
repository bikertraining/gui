export default defineEventHandler((event) => {
    let res = event.node.res

    const day = 86400
    const hour = 60 * 60
    const url = event.node.req.url;
    const maxage = url?.match(/(.+)\.(jpg|jpeg|gif|css|png|js|ico|svg|mjs)/) ? day : hour

    res.setHeader('Cache-Control', `max-age=${maxage} s-maxage=${maxage}`);
})