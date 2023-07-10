<script lang="ts"
        setup>
const route = useRoute();

definePageMeta({
    auth: false,
    description: 'Unsubscribed from contact list',
    keywords: 'unsubscribed, contact list',
    title: 'Unsubscribed from Contact List'
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="px-4 py-5 pb-3 my-1">
        <h1 class="text-center fs-4">You have been removed from all future emails from Biker Training LLC.</h1>
    </div>
</template>

<style scoped>

</style>