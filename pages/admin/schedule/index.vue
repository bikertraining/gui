<script setup lang="ts">
const {formArr, getSearch, utilClassDate} = useAdminSchedule();

const {loadingState} = usePageLoading();

const route = useRoute();

const router = useRouter();

definePageMeta({
  description: 'Search schedule',
  layout: 'admin',
  title: 'Search Schedule'
});

onMounted(async () => {
  loadingState.isActive = true;

  await getSearch();

  loadingState.isActive = false;
});

useHead({
  title: 'Search Schedule'
});
</script>

<template>
  <table
      class="table table-striped table-hover caption-top">
    <caption
        v-if="formArr.length > 0"
        class="d-print-none fw-bold mb-4 mt-2">
      <BootstrapIcon
          name="exclamation-diamond"/>
      {{ formArr.length }} Classes
    </caption>

    <thead
        v-if="formArr.length > 0"
        class="border border-dark border-2 border-start-0 border-end-0">
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

    <tbody
        v-if="formArr.length > 0">
    <tr
        v-for="schedule in formArr"
        v-bind:key="schedule"
        v-on:click="router.push({ path: `/admin/schedule/${schedule['id']}/edit`})">
      <td>
        {{ utilClassDate(schedule['date_from'], schedule['date_to']) }}
      </td>

      <td>
        {{ schedule['day_type_name'] }}
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
            v-else>
          CLASS FULL
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
  background-color: #198754;
  color: #FFFFFF;
}
</style>