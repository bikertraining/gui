<script setup lang="ts">
const route = useRoute();

const {getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'Learn to ride or improve your motorcycle skills. Get your ticket to ride!',
  keywords: 'motorcycle class near me, learn to ride, msf basic rider course, motorcycle class pensacola, biker training',
  title: 'Home'
});

useHead({
  title: `${route.meta['title']}`,
  script: [
    {
      innerHTML: `
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "${getGuiUrl()}"
                  }]
                }
                    `,
      type: 'application/ld+json'
    }
  ]
});
</script>

<template>
  <h1
      class="fs-4 fw-bold text-center mx-auto my-5 mb-3">
    LEARN TO RIDE OR IMPROVE YOUR MOTORCYCLE SKILLS
  </h1>

  <div
      class="text-center">
    <img
        alt="Biker Training LLC"
        height="200"
        loading="eager"
        src="/img/bikertraining/logo_bike_only.webp"
        width="510"/>
  </div>

  <h2
      class="fs-5 fw-bold text-center mx-auto mt-3 mb-3">
    Whether you are totally new to motorcycles, a returning rider or already experienced, we have a course to meet your
    needs.
  </h2>

  <h3
      class="fs-5 fw-bold text-center mx-auto mt-3 mb-3">
    Our Basic RiderCourse and 3-Wheel RiderCourse meets the state of Florida license endorsement requirement.
  </h3>

  <div
      class="container text-center">
    <div
        class="row row-cols-1 row-cols-lg-3 g-0">
      <div
          class="col">
        <div
            class="p-1">
          <div
              class="card shadow">
            <div
                class="card-body text-center">
              <div
                  class="card-title fs-5 fw-bold mb-3">
                Basic RiderCourse
              </div>

              <NuxtLink
                  to="/schedule">
                <img
                    alt="Basic RiderCourse"
                    class="mb-2 rounded img-fluid"
                    height="267"
                    src="/img/stock/brc.webp"
                    width="400"/>
              </NuxtLink>

              <div
                  class="card-text text-start mb-4">
                Whether you’re just getting started or just brushing up, learn the skills you need to ride with
                confidence.
              </div>
            </div>

            <div
                class="card-footer border-0 mb-3 text-center"
                style="background-color: inherit;">
              <NuxtLink
                  class="btn btn-lg btn-success"
                  to="/schedule">
                <BootstrapIcon
                    name="calendar3"/>
                Basic RiderCourse Schedule
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div
          class="col">
        <div
            class="p-1">
          <div
              class="card shadow">
            <div
                class="card-body text-center">
              <div
                  class="card-title fs-5 fw-bold mb-3">
                3-Wheel RiderCourse
              </div>

              <NuxtLink
                  to="/schedule/3wbrc">
                <img
                    alt="3-Wheel Basic RiderCourse"
                    class="mb-2 rounded img-fluid"
                    height="267"
                    src="/img/stock/3wbrc.webp"
                    width="400"/>
              </NuxtLink>

              <div
                  class="card-text text-start">
                Designed to give you the skills to ride with confidence, whether you’re a first-time rider or it’s your
                first time on three wheels.
              </div>
            </div>

            <div
                class="card-footer border-0 mb-3 text-center"
                style="background-color: inherit;">
              <NuxtLink
                  class="btn btn-lg btn-success"
                  to="/schedule/3wbrc">
                <BootstrapIcon
                    name="calendar3"/>
                3-Wheel RiderCourse Schedule
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div
          class="col">
        <div
            class="p-1">
          <div
              class="card shadow">
            <div
                class="card-body text-center">
              <div
                  class="card-title fs-5 fw-bold mb-3">
                Skilled RiderCourse
              </div>

              <NuxtLink
                  to="/schedule/src">
                <img
                    alt="Skilled RiderCourse"
                    class="mb-2 rounded img-fluid"
                    height="267"
                    src="/img/stock/src.webp"
                    width="400"/>
              </NuxtLink>

              <div
                  class="card-text text-start">
                Have your motorcycle endorsement already but need extra training or Active-Duty military to continue
                operating your motorcycle on a military installation?
              </div>
            </div>

            <div
                class="card-footer border-0 mb-3 text-center"
                style="background-color: inherit;">
              <NuxtLink
                  class="btn btn-lg btn-success"
                  to="/schedule/src">
                <BootstrapIcon
                    name="calendar3"/>
                Skilled RiderCourse Schedule
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
      class="d-flex justify-content-evenly flex-wrap">
    <div>
      <NuxtLink
          target="_blank"
          to="https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/florida-rider-training-program-courses/">
        <img
            alt="Florida Rider Training Program"
            class="img-fluid mt-3"
            height="138"
            loading="lazy"
            src="/img/frtp/logo.webp"
            width="200"/>
      </NuxtLink>
    </div>

    <div>
      <NuxtLink
          target="_blank"
          to="https://msf-usa.org/">
        <img
            alt="Motorcycle Safety Foundation"
            class="img-fluid mt-5"
            height="93"
            loading="lazy"
            src="/img/msf/logo.webp"
            width="200"/>
      </NuxtLink>
    </div>

    <div>
      <NuxtLink
          target="_blank"
          to="https://www.pensacolaharley.com/">
        <img
            alt="Pensacola Harley-Davidson"
            class="img-fluid mt-5"
            height="97"
            src="/img/phd/logo.webp"
            width="400"/>
      </NuxtLink>
    </div>

    <div>
      <NuxtLink
          target="_blank"
          to="https://learntoride3wheel.com/webreg/production/reactapp/?book=canamregister&SC=FLBKTR01&CC=3WBU">
        <img
            alt="Can-AM BRP"
            class="img-fluid mt-5"
            height="100"
            src="/img/brp/logo.webp"
            width="400"/>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>