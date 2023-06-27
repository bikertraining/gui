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
    <slot/>
</template>

<style scoped>

</style>