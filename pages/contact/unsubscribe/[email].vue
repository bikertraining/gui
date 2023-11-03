<script lang="ts"
        setup>
const { deleteContact } = useClientContact();

const { loadingState } = usePageLoading();

const route = useRoute();

definePageMeta({
    auth: false,
    description: 'Unsubscribe from contact list',
    keywords: 'unsubscribe, contact list',
    title: 'Unsubscribe from Contact List'
});

onMounted(async () => {
    loadingState.isActive = true;

    await deleteContact(route.params['email'].toString());

    loadingState.isActive = false;
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>

</template>

<style scoped>

</style>