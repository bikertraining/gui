<script lang="ts"
        setup>
const route = useRoute();

const { deleteContact } = useClientContact();

definePageMeta({
    auth: false,
    description: 'Unsubscribe from contact list',
    keywords: 'unsubscribe, contact list',
    title: 'Unsubscribe from Contact List'
});

onMounted(() => {
    deleteContact(route.params['email'].toString());
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>

</template>

<style scoped>

</style>