<script setup lang="ts">
const route = useRoute();

const {getBusinessPhone} = useUtils();

definePageMeta({
  auth: false,
  description: 'Payment failed',
  keywords: 'payment failed',
  title: 'Payment Failed'
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
        class="text-decoration-none">
      {{ getBusinessPhone(false) }}
    </NuxtLink>
  </div>

  <div
      class="fs-3 text-center">
    There appears to be a problem processing your payment.
  </div>

  <div
      class="fs-3 text-center mb-3">
    Your bank returned the following information:
  </div>

  <div
      class="fs-3 fw-bold text-center text-danger">
    {{ route.params['reason'] }}
  </div>

  <div
      class="fs-3 fw-bold text-center mt-3 mb-3">
    OR
  </div>

  <div
      class="fs-3 text-center fw-bold">
    <NuxtLink
        :to="`/payment/${route.params['class_type']}`"
        class="btn btn-lg btn-success mb-3">
      <BootstrapIcon
          name="link-45deg"/>
      Click here to try again
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>