<script setup lang="ts">
const route = useRoute();

const {getBusinessPhone, getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'Private Motorcycle Lessons',
  keywords: 'private motorcycle class, private class, private',
  title: 'Private'
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
                        "name": "Courses",
                        "item": "${getGuiUrl()}/courses"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Private",
                        "item": "${getGuiUrl()}/courses/private"
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
  <div
      class="card mt-3">
    <div
        class="card-header bg-dark fs-4 text-white">
      Private Lessons
    </div>

    <div
        class="card-body">
      <div
          class="card-text">
        <div>
          Private instruction is available for riders of all skill levels from beginners to advanced.
        </div>

        <div
            class="mt-3 fw-bold">
          You must provide your own motorcycle.
        </div>

        <div
            class="mt-3">
          We can provide tailored instruction to meet your exact needs.
        </div>

        <div
            class="mt-3 fw-bold">
          Note: This course is NOT FOR ENDORSEMENT. You must already have your motorcycle endorsement.
        </div>
      </div>
    </div>

    <div
        class="card-footer border-0 text-center"
        style="background-color: inherit">
      <div>
        <NuxtLink
            v-bind:href="'tel:' + getBusinessPhone(true)"
            class="btn btn-lg btn-outline-success w-100 mb-3">
          <BootstrapIcon
              name="telephone-fill"/>
          Call us at {{ getBusinessPhone(false) }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>