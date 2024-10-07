<script setup lang="ts">
const {formObj, getPrices} = useClientPrice();

const {loadingState} = usePageLoading();

const route = useRoute();

const {getBusinessPhone, getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'Motorcycle Courses',
  keywords: 'motorcycle courses, motorcycle classes near me, msf course',
  title: 'Motorcycle Courses'
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
      class="row mt-1 justify-content-center">
    <div
        class="col-lg-4 col-md-8 col-sm-12 mt-3">
      <div
          class="card shadow">
        <div
            class="card-header bg-dark fs-4 text-center text-white">
          Basic RiderCourse (BRCu)
        </div>

        <div
            class="card-body">
          <div
              class="card-title text-center fs-2">
            ${{ formObj['brc']['amount'].slice(0, -3) }}
          </div>

          <div
              class="card-text">
            This course meets the State of Florida license endorsement requirement. This course is for those new to
            riding and is also a great course for those that are coming back to motorcycle riding. Each student will be
            provided their own motorcycle.
          </div>
        </div>

        <div
            class="card-footer border-0 text-center"
            style="background-color: inherit;">
          <div>
            <NuxtLink
                class="btn btn-lg btn-outline-success w-100 mb-3"
                to="/schedule">
              <BootstrapIcon
                  name="calendar3"/>
              Basic RiderCourse Schedule
            </NuxtLink>
          </div>

          <div>
            <NuxtLink
                class="btn btn-lg btn-outline-primary w-100"
                to="/courses/brc">
              <BootstrapIcon
                  name="info-circle"/>
              More Information
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div
        class="col-lg-4 col-md-8 col-sm-12 mt-3">
      <div
          class="card shadow">
        <div
            class="card-header bg-dark fs-4 text-center text-white">
          3-Wheel Basic RiderCourse (3WBRCu)
        </div>

        <div
            class="card-body">
          <div
              class="card-title text-center fs-2">
            ${{ formObj['3wbrc']['amount'].slice(0, -3) }}
          </div>

          <div
              class="card-text">
            This course meets the State of Florida license endorsement requirement. This course is for those who want to
            learn to ride a 3-wheel motorcycle. Students must provide their own 3-wheel motorcycle for the training.
          </div>
        </div>

        <div
            class="card-footer border-0 text-center mt-4"
            style="background-color: inherit;">
          <div>
            <NuxtLink
                class="btn btn-lg btn-outline-success w-100 mb-3"
                to="/schedule/3wbrc">
              <BootstrapIcon
                  name="calendar3"/>
              3-Wheel RiderCourse Schedule
            </NuxtLink>
          </div>

          <div>
            <NuxtLink
                class="btn btn-lg btn-outline-primary w-100"
                to="/courses/3wbrc">
              <BootstrapIcon
                  name="info-circle"/>
              More Information
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div
        class="col-lg-4 col-md-8 col-sm-12 mt-3">
      <div
          class="card shadow">
        <div
            class="card-header bg-dark fs-4 text-center text-white">
          Skilled RiderCourse (BRCu2)
        </div>

        <div
            class="card-body">
          <div
              class="card-title text-center fs-2">
            ${{ formObj['src']['amount'].slice(0, -3) }}
          </div>

          <div
              class="card-text">
            For those that already ride and have their motorcycle endorsement but want to be better. This course is
            designed for those that have been riding for at least three months and are ready to obtain new skills.
            You’re good, we’ll make ya better!
          </div>
        </div>

        <div
            class="card-footer border-0 text-center"
            style="background-color: inherit;">
          <div>
            <NuxtLink
                class="btn btn-lg btn-outline-success w-100 mb-3"
                to="/schedule/src">
              <BootstrapIcon
                  name="calendar3"/>
              Skilled RiderCourse Schedule
            </NuxtLink>
          </div>

          <div>
            <NuxtLink
                class="btn btn-lg btn-outline-primary w-100"
                to="/courses/src">
              <BootstrapIcon
                  name="info-circle"/>
              More Information
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
      class="row mt-1 justify-content-center justify-content-lg-start">
    <div
        class="col-lg-4 col-md-8 col-sm-12 mt-3">
      <div
          class="card shadow">
        <div
            class="card-header bg-dark fs-4 text-center text-white">
          Kickstart
        </div>

        <div
            class="card-body">
          <div
              class="card-title text-center fs-2">
            ${{ formObj['ime']['amount'].slice(0, -3) }}
          </div>

          <div
              class="card-text">
            The KickStart Course is for students that have not reached a level of comfort that will enable them to
            continue with the course. True novice riders may find the slower pace helpful when learning the initial
            control skills and gain greater comfort and familiarity with the motorcycle.
          </div>
        </div>

        <div
            class="card-footer border-0 text-center"
            style="background-color: inherit;">
          <div>
            <NuxtLink
                v-bind:href="'tel:' + getBusinessPhone(true)"
                class="btn btn-lg btn-outline-danger w-100 mb-3">
              <BootstrapIcon
                  name="telephone-fill"/>
              Call us at {{ getBusinessPhone(false) }}
            </NuxtLink>
          </div>

          <div>
            <NuxtLink
                class="btn btn-lg btn-outline-primary w-100"
                to="/courses/kickstart">
              <BootstrapIcon
                  name="info-circle"/>
              More Information
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div
        class="col-lg-4 col-md-8 col-sm-12 mt-3">
      <div
          class="card shadow">
        <div
            class="card-header bg-dark fs-4 text-center text-white">
          Private Lessons
        </div>

        <div
            class="card-body">
          <div
              class="card-title text-center fs-2">
            ${{ formObj['private']['amount'].slice(0, -3) }}
          </div>

          <div
              class="card-text">
            Private instruction is available for riders of all skill levels from beginners to advanced.
          </div>
        </div>

        <div
            class="card-footer border-0 text-center mt-5"
            style="background-color: inherit;">
          <div>
            <NuxtLink
                v-bind:href="'tel:' + getBusinessPhone(true)"
                class="btn btn-lg btn-outline-danger w-100 mb-3">
              <BootstrapIcon
                  name="telephone-fill"/>
              Call us at {{ getBusinessPhone(false) }}
            </NuxtLink>
          </div>

          <div>
            <NuxtLink
                class="btn btn-lg btn-outline-primary w-100"
                to="/courses/private">
              <BootstrapIcon
                  name="info-circle"/>
              More Information
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>