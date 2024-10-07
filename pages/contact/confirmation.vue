<script setup lang="ts">
const route = useRoute();

definePageMeta({
  auth: false,
  description: 'Contact Us - Thank You',
  keywords: 'contact us, contact',
  title: 'Contact Us - Thank You'
});

useHead({
  title: `${route.meta['title']}`
});
</script>

<template>
  <div
      class="fw-bold mt-3">
    Thank you for contacting us!
  </div>

  <div
      class="mt-3">
    We will reply to your message as soon as we can.
  </div>

  <div
      class="mt-3">
    In the meantime, our

    <NuxtLink
        class="text-decoration-none"
        to="/faq">
      FAQs
    </NuxtLink>

    can answer most questions.
  </div>
</template>

<style scoped>

</style>