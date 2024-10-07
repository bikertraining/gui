<script setup lang="ts">
const {logout} = useAuthorization();

const route = useRoute();

definePageMeta({
  auth: false,
  description: 'Employee Logout',
  layout: 'authorization',
  title: 'Logout'
});

onMounted(async () => {
  await logout();
});

useHead({
  title: `${route.meta['title']}`
});
</script>

<template>

</template>

<style scoped>

</style>