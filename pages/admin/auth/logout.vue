<script lang="ts"
        setup>
const { logout } = useAuthorization();

const route = useRoute();

definePageMeta({
    auth: false,
    description: 'Employee Logout',
    keywords: 'logout, employee logout',
    layout: 'authorization',
    title: 'Logout'
});

onMounted(() => {
    logout();
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>

</template>

<style scoped>

</style>