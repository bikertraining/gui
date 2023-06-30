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
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:description', content: `${route.meta['description']}` },
        { property: 'og:url', content: `${getGuiUrl()}${route.path}` },
        { property: 'og:title', content: `${route.meta['title']}` },
        { property: 'og:type', content: 'website' }
    ],
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${getApiTitle()}` : `${getApiTitle()}`;
    }
});
</script>

<template>
    <div>
        <LayoutAdminHeader/>

        <Alert/>

        <div class="container-fluid mb-3">
            <slot/>
        </div>
    </div>
</template>

<style scoped>

</style>