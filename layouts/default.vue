<script lang="ts"
        setup>
const route = useRoute();

const { getApiTitle, getGuiUrl } = useUtils();

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        { rel: 'canonical', href: `${getGuiUrl()}${route.path}` },
        { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }
    ],
    meta: [
        { name: 'description', content: `${route.meta['description']}` },
        { name: 'keywords', content: `${route.meta['keywords']}` },
        { name: 'facebook-domain-verification', content: 'd0zh091aevzsgs08sqg7c98drg6x9g' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:description', content: `${route.meta['description']}` },
        { property: 'og:url', content: `${getGuiUrl()}${route.path}` },
        { property: 'og:title', content: `${route.meta['title']} - ${getApiTitle()}` },
        { property: 'og:type', content: 'website' }
    ],
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${getApiTitle()}` : `${getApiTitle()}`;
    }
});
</script>

<template>
    <SvgLoad/>

    <LayoutClientHeader/>

    <div class="container-fluid mb-3">
        <slot/>
    </div>

    <LayoutClientFooter/>
</template>

<style scoped>

</style>