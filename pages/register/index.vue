<script lang="ts" setup>
const route = useRoute();

const router = useRouter();

onMounted(async () => {
    await router.push({ path: '/schedule' });
});

definePageMeta({
    auth: false,
    description: 'Register Online',
    keywords: 'register online, register',
    title: 'Register Online'
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>

</template>

<style scoped>

</style>