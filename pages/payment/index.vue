<script setup lang="ts">
const route = useRoute();

const {getBusinessPhone, getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'Pay Online',
  keywords: 'payment, pay online',
  title: 'Pay Online'
});

useHead({
  title: `${route.meta['title']}`,
  script: [
    {
      innerHTML: `
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "${getGuiUrl()}"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Pay Online",
                        "item": "${getGuiUrl()}/payment"
                      }
                  ]
                }
                    `,
      type: 'application/ld+json'
    }
  ]
});
</script>

<template>
  <h1
      class="text-center fs-4 mt-3">
    Please choose a class type:
  </h1>

  <div
      class="fs-3 fw-bold mt-5 mb-3 text-center">
    <NuxtLink
        class="btn btn-lg btn-success mb-3"
        to="/payment/brc">
      <BootstrapIcon
          name="link-45deg"/>
      Basic RiderCourse
    </NuxtLink>
  </div>

  <div
      class="fs-3 fw-bold mb-3 text-center">
    <NuxtLink
        class="btn btn-lg btn-success mb-3"
        to="/payment/3wbrc">
      <BootstrapIcon
          name="link-45deg"/>
      3-Wheel Basic RiderCourse
    </NuxtLink>
  </div>

  <div
      class="fs-3 fw-bold text-center">
    <NuxtLink
        class="btn btn-lg btn-success mb-3"
        to="/payment/src">
      <BootstrapIcon
          name="link-45deg"/>
      Skilled RiderCourse
    </NuxtLink>
  </div>

  <div
      class="fs-4 fw-bold text-center mt-3">
    If you are not sure, please call us at

    <NuxtLink
        v-bind:href="'tel:' + getBusinessPhone(true)"
        class="text-decoration-none">
      {{ getBusinessPhone(false) }}
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>