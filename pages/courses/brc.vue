<script setup lang="ts">
const {formObj, getPrices} = useClientPrice();

const {loadingState} = usePageLoading();

const route = useRoute();

const {getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'Basic Rider Course',
  keywords: 'basic rider course, basic rider course near me, motorcycle basic rider course near me, msf basic rider course',
  title: 'Basic Rider Course'
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
                        "name": "Basic Rider Course",
                        "item": "${getGuiUrl()}/courses/brc"
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
      Basic RiderCourse (BRCu)
    </div>

    <div
        class="card-body">
      <div
          class="card-text">
        <div>
          This course is designed for beginning riders of all ages. The Basic RiderCourse consists of 15 hours of
          instruction including approximately 5 hours using the online self-paced ePackage-1 eCourse and 10 hours of
          riding on the parking lot range. This course will teach you how to operate a motorcycle safely, and strongly
          emphasizes the special skills and mental attitude required for dealing with every day riding.
        </div>

        <div
            class="mt-3 fw-bold">
          You must be able to ride a two-wheeled bicycle and be at least 16 years old and have either a valid learners
          permit or drivers license to enroll in the BRC.
        </div>

        <div
            class="mt-3">
          You will learn about different types of motorcycles, their controls, and how they operate. The Rider Coaches,
          all experienced professionals, will advise you on the proper riding gear to ensure comfort and protection. You
          will also learn how alcohol and other drugs affect your ability to ride safely.
        </div>

        <div
            class="mt-3">
          The range is a controlled, off-street, pedestrian-free environment. Students use motorcycles provided by the
          school to learn and practice safely and correctly the various maneuvers and demanding situations encountered
          in street riding. Riders must pass both a written test and a riding skills test in order to complete the
          course. Upon successful completion, you will be exempt from any requirement to take the State test for your
          motorcycle endorsement at the driver's license office.
        </div>

        <div
            class="mt-3 fw-bold">
          This course meets the State of Florida requirement for obtaining a motorcycle endorsement on your driver’s
          license. All students must wear the required protective gear.
        </div>

        <div
            class="mt-3 fw-bold">
          Important: You are purchasing a seat in the class of your choice. After you select and confirm the date of the
          class that best fits your schedule, fees are nonrefundable. You must attend all class/range sessions. If you
          miss a class or range session or for any reason do not fully complete your class, you can purchase a seat in a
          subsequent class for ${{ formObj['brc']['re_amount'] }}.
        </div>
      </div>
    </div>

    <div
        class="card-footer border-0 text-center"
        style="background-color: inherit">
      <div>
        <NuxtLink
            class="btn btn-lg btn-outline-success w-100 mb-3"
            to="/schedule">
          <BootstrapIcon
              name="calendar3"/>
          Basic RiderCourse Schedule
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>