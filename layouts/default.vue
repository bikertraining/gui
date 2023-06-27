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
        <LayoutClientHeader/>

        <div class="container-fluid mb-3">
            <slot/>
        </div>

        <LayoutClientFooter/>
    </div>
</template>

<style scoped>

</style>