<script lang="ts"
        setup>
const req = useRequestURL();

const route = useRoute();

const { getApiTitle, getGuiUrl } = useUtils();

const getFacebookVerification = () => {
    if (req.hostname === 'bikertraining.com' || req.hostname === 'www.bikertraining.com') {
        return 'd0zh091aevzsgs08sqg7c98drg6x9g';
    } else if (req.hostname === 'bikertraining.net' || req.hostname === 'www.bikertraining.net') {
        return 'b2oyhburirbsx19ksag8s6y5ejcyr3';
    } else if (req.hostname === 'bikertraining.org' || req.hostname === 'www.bikertraining.org') {
        return 'jpiadizntdmc8n008xxpr9fas4b5o7';
    }
};

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
        { name: 'facebook-domain-verification', content: getFacebookVerification() },
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
    <div>
        <LayoutClientHeader/>

        <div class="container-fluid mb-3">
            <slot/>
        </div>

        <LayoutClientFooter/>
    </div>
</template>

<style scoped>

</style>