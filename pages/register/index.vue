<script lang="ts" setup>
const router = useRouter();

onMounted(async () => {
    await router.push({ path: '/schedule' });
});
</script>

<template>

</template>

<style scoped>

</style>