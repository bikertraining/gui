<script lang="ts"
        setup>
const { getApiTitle, getGuiUrl } = useUtils();

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        { rel: 'canonical', href: `${getGuiUrl()}${useRoute().path}` }
    ],
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${getApiTitle()}` : `${getApiTitle()}`;
    }
})
</script>

<template>
    <div>
        <LayoutAdminHeader/>

        <Alert/>

        <div class="container-fluid mb-3">
            <slot/>
        </div>

        <LayoutAdminFooter/>
    </div>
</template>

<style scoped>

</style>