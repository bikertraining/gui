<script setup lang="ts">
const route = useRoute();

const {getBusinessPhone} = useUtils();

definePageMeta({
  auth: false,
  description: 'Please call us',
  keywords: 'please, call, us',
  title: 'Please Call'
});

useHead({
  title: `${route.meta['title']}`
});
</script>

<template>
  <div
      class="fs-3 fw-bold mt-5 text-center">
    Please call us at

    <NuxtLink
        v-bind:href="'tel:' + getBusinessPhone(true)"
        class="link-underline link-underline-opacity-0">
      {{ getBusinessPhone(false) }}
    </NuxtLink>
  </div>

  <div
      class="fs-3 text-center">
    There appears to be a problem processing your payment.
  </div>
</template>

<style scoped>

</style>