<script setup lang="ts">
const {formObj, getPrices} = useClientPrice();

const {loadingState} = usePageLoading();

const route = useRoute();

const {getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'Skilled Rider Course',
  keywords: 'skilled, skilled rider course, experienced rider course, motorcycle advanced rider training, msf experienced rider course',
  title: 'Skilled Rider Course'
});

onMounted(async () => {
  loadingState.isActive = true;

  await getPrices();

  loadingState.isActive = false;
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
                        "name": "Skilled Rider Course",
                        "item": "${getGuiUrl()}/courses/src"
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
      Skilled RiderCourse (BRCu2)
    </div>

    <div
        class="card-body">
      <div
          class="card-text">
        <div>
          You’re good... we’ll make ya better!
        </div>

        <div
            class="mt-3">
          No matter how long you have been riding, this course will make you a better and safer rider.
        </div>

        <div
            class="mt-3 fw-bold">
          Note: This course is NOT FOR ENDORSEMENT, students must already have a motorcycle endorsement on their
          license.
        </div>

        <div
            class="mt-3">
          This one day course, typically held on Sundays, is for riders who already own and ride a motorcycle and are
          interested in state-of-the-art motorcycle handling techniques or for brushing up on their safe street riding
          skills. Increasing numbers of seasoned riders are coming to the Skilled RiderCourse to fine-tune their riding
          and mental skills needed for survival in traffic.
        </div>

        <div
            class="mt-3">
          You'll discuss with your peers how to balance the mental and physical aspects of safe riding, managing risk,
          increasing visibility and optimizing lane position. The course also covers protective gear, rider
          responsibility, motorcycle inspection and care, and the effects of alcohol and other drugs on riding.
        </div>

        <div
            class="mt-3">
          On the range, using your own motorcycle, you will put into practice intense riding activities, including the
          techniques of managing traction, slow speed handling, stopping quickly, cornering and swerving.
        </div>

        <div
            class="mt-3 fw-bold">
          Riders must provide a street-legal bike that passes a safety inspection (T-CLOCS) and provide proof of
          insurance and ownership. If the motorcycle is not owned by the rider, a notarized, written approval from the
          owner to use the motorcycle in the course must be provided. Additionally, handlebars should not be over 15
          inches from the grips to the lowest part of the seat.
        </div>

        <div
            class="mt-3 fw-bold">
          All students must wear the required protective gear.
        </div>

        <div
            class="mt-3">
          Upon completion of the Skilled RiderCourse, a graduate may receive an insurance discount from participating
          companies.
        </div>

        <div
            class="mt-3 fw-bold">
          Important: You are purchasing a seat in the class of your choice. After you select and confirm the date of the
          class that best fits your schedule, fees are nonrefundable. You must attend all class/range sessions. If you
          miss a class or range session or for any reason do not fully complete your class, you can purchase a seat in a
          subsequent class for ${{ formObj['src']['re_amount'] }}.
        </div>
      </div>
    </div>

    <div
        class="card-footer border-0 text-center"
        style="background-color: inherit">
      <div>
        <NuxtLink
            button="outline-success"
            class="btn btn-lg btn-outline-success w-100 mb-3"
            to="/schedule/src">
          <BootstrapIcon
              name="calendar3"/>
          Skilled RiderCourse Schedule
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>