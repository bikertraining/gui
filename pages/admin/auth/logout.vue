<script setup
        lang="ts">
definePageMeta({ auth: false, layout: 'authorization' });

const { logout } = useAuthorization();

onMounted(() => {
    logout();
});

useHead({
    title: 'Logout'
});
</script>

<template>

</template>

<style scoped>

</style>