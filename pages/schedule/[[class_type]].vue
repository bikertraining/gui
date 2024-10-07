<script setup lang="ts">
const {formArr, getSearch, utilClassDate} = useClientSchedule();

const {loadingState} = usePageLoading();

const route = useRoute();

const router = useRouter();

const {getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'Motorcycle Training Schedule',
  keywords: 'motorcycle training schedule, motorcycle classes near me, msf course, brc course',
  title: 'Schedule'
});

onMounted(async () => {
  loadingState.isActive = true;

  await getSearch(route.params['class_type']);

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
                        "name": "Schedule",
                        "item": "${getGuiUrl()}/schedule"
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
  <table
      v-if="formArr.length > 0"
      class="caption-top table table-hover table-striped">
    <caption
        class="d-print-none fw-bold mb-3 mt-2">
      <BootstrapIcon
          name="exclamation-diamond"/>
      Click on a class to register

      <div
          v-if="route.params['class_type'] === '3wbrc'"
          class="fw-bold mt-3 text-danger">
        You *must* bring your own 3-wheel motorcycle for training purposes and show proof of insurance.

        <div
            class="fw-normal mt-3 text-dark">
          <NuxtLink
              class="btn btn-success btn-sm"
              to="https://learntoride3wheel.com/webreg/production/reactapp/?book=canamregister&SC=FLBKTR01&CC=3WBU">
            Click Here
          </NuxtLink>

          for the

          <NuxtLink
              target="_blank"
              to="https://learntoride3wheel.com/webreg/production/reactapp/?book=canamregister&SC=FLBKTR01&CC=3WBU">
            <img
                alt="Can-AM BRP"
                class="img-fluid"
                height="75"
                src="/img/brp/logo.webp"
                width="150"/>
          </NuxtLink>

          program. Can-AM will supply you with a training bike.
        </div>
      </div>

      <div
          v-if="route.params['class_type'] === 'src'"
          class="fw-bold mt-3 text-danger">
        You *must* bring your own motorcycle for training purposes and show proof of insurance.

        <div
            class="mt-3">
          You *must* have the motorcycle endorsement on your drivers
          license.
        </div>
      </div>
    </caption>

    <thead
        class="border-dark border-2 border-start-0 border-end-0">
    <tr>
      <th
          class="w-25"
          scope="col">
        Dates
      </th>

      <th
          class="w-25"
          scope="col">
        Days
      </th>

      <th
          class="w-25"
          scope="col">
        Course
      </th>

      <th
          class="w-25"
          scope="col">
        Seats Available
      </th>
    </tr>
    </thead>

    <tbody>
    <tr
        v-for="schedule in formArr"
        v-bind:key="schedule"
        v-on="schedule['seats'] > 0 ? { click: () => router.push(`/register/${schedule['id']}`) } : { click: () => { return false; } }">
      <td>
        <div>
          {{ utilClassDate(schedule['date_from'], schedule['date_to']) }}
        </div>

        <div
            v-if="schedule['seats'] > 0"
            class="badge rounded-pill bg-secondary border border-dark d-print-none">
          Sign Up Here
        </div>
      </td>

      <td>
        <div
            class="fw-bold">
          {{ schedule['day_type_name'] }}
        </div>

        <div
            v-if="schedule['day_type'] == 'thursday_friday' || schedule['day_type'] == 'saturday_sunday' || schedule['day_type'] == 'monday_tuesday'">
          7:00 AM - 4:00 PM
        </div>

        <div
            v-if="schedule['day_type'] == 'sunday'">
          12:00 PM (Noon) - 5:30 PM
        </div>

        <div
            v-if="schedule['day_type'] == 'sunday_monday'">
          <div>
            Sunday 1:00 PM - 4:00 PM
          </div>

          <div>
            Monday 7:00 AM - 4:00 PM
          </div>
        </div>
      </td>

      <td>
        {{ schedule['class_type_name'] }}
      </td>

      <td>
        <div
            v-if="schedule['seats'] > 0">
          {{ schedule['seats'] }}
        </div>

        <div
            v-else-if="schedule['class_type'] == '3wbrc' && schedule['seats'] == 0">
          Call for Availability
        </div>

        <div
            v-else>
          CLASS FULL
        </div>
      </td>
    </tr>
    </tbody>
  </table>

  <div
      v-if="formArr.length === 0 && route.params['class_type'] === '3wbrc'"
      class="fw-bold mt-3 text-danger text-center">
    Sorry but there are no available 3-Wheel classes. However, if you had a group of at least 2 students we can
    add a private class. Call us for more information.
  </div>

  <div
      v-if="formArr.length === 0 && route.params['class_type'] === 'brc'"
      class="fw-bold mt-3 text-danger text-center">
    Sorry but there are no available Basic Rider classes.
  </div>

  <div
      v-if="formArr.length === 0 && route.params['class_type'] === 'src'"
      class="fw-bold mt-3 text-danger text-center">
    Sorry but there are no available Skilled Rider classes. However, if you had a group of at least 4 students we
    can add a private class. Call us for more information.
  </div>

  <div
      v-if="formArr.length === 0 && route.params['class_type'] === ''"
      class="fw-bold mt-3 text-danger text-center">
    Sorry but there are no available classes.
  </div>
</template>

<style scoped>
.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
  background-color: #198754;
  color: #FFFFFF;
}
</style>