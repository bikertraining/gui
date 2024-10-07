<script setup lang="ts">
const route = useRoute();

const {getBusinessPhone, getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'Remedial Motorcycle Training',
  keywords: 'remedial motorcycle training, motorcycle, training, remedial',
  title: 'Kickstart'
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
                        "name": "Kickstart",
                        "item": "${getGuiUrl()}/courses/kickstart"
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
      Kickstart RiderCourse (IME)
    </div>

    <div
        class="card-body">
      <div
          class="card-text">
        <div>
          The KickStart Course is for students that have not reached a level of comfort that will enable them to
          continue with the course. True novice riders may find the slower pace helpful when learning the initial
          control skills and gain greater comfort and familiarity with the motorcycle. It is a 2-3 hour, first-touch
          experience with a motorcycle and not designed to teach a person to ride. Also embedded in the experience is a
          self-assessment component to ensure a person is aware of the risks and requirements for being a good, safe and
          responsible rider.
        </div>

        <div
            class="mt-3 fw-bold">
          Note: This course is NOT FOR ENDORSEMENT
        </div>

        <div
            class="mt-3">
          The KickStart Course can be given just about any time during the week and on most weekends.
        </div>

        <div
            class="mt-3">
          Novice riders that complete this course find they are quite comfortable with the motorcycle and better
          prepared for the BRC.
        </div>

        <div
            class="mt-3 fw-bold">
          This course is only available to those who have taken the BRC or 3WBRC and were not comfortable enough to
          continue.
        </div>
      </div>
    </div>

    <div
        class="card-footer border-0 text-center"
        style="background-color: inherit;">
      <div>
        <NuxtLink
            v-bind:href="'tel:' + getBusinessPhone(true)"
            class="btn btn-lg btn-outline-success w-100 mb-3"
            tabindex="-1">
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