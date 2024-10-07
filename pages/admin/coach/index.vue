<script setup lang="ts">
const {formArr, frtp_expiration, getSearchActive, msf_expiration} = useAdminCoach();

const {loadingState} = usePageLoading();

const route = useRoute();

const router = useRouter();

definePageMeta({
  description: 'Search coaches',
  layout: 'admin',
  title: 'Search Coaches'
});

onMounted(async () => {
  loadingState.isActive = true;

  await getSearchActive();

  loadingState.isActive = false;
});

useHead({
  title: `${route.meta['title']}`
});
</script>

<template>
  <table
      class="table table-striped table-hover caption-top">
    <caption
        v-if="formArr.length > 0"
        class="d-print-none fw-bold mb-3 mt-2">
      <BootstrapIcon
          name="exclamation-diamond"/>
      {{ formArr.length }} Active Coaches
    </caption>

    <thead
        v-if="formArr.length > 0"
        class="border border-dark border-2 border-start-0 border-end-0">
    <tr>
      <th
          class="w-25"
          scope="col">
        MSF ID
      </th>

      <th
          class="w-25"
          scope="col">
        Name
      </th>

      <th
          class="w-25"
          scope="col">
        MSF
      </th>

      <th
          class="w-25"
          scope="col">
        FRTP
      </th>
    </tr>
    </thead>

    <tbody
        v-if="formArr.length > 0">
    <tr
        v-for="coach in formArr"
        v-bind:key="coach"
        v-on:click="router.push({ path: `/admin/coach/${coach['id']}/edit`})">
      <td>
        <div
            v-if="coach['msf_id'] > 0">
          {{ coach['msf_id'] }}
        </div>

        <div
            v-else>
          Range Aide
        </div>
      </td>

      <td>
        {{ coach['name'] }}
      </td>

      <td>
        <div
            v-if="coach['msf_id'] > 0">
          Expires: {{ coach['date_to'] }}

          <span
              v-if="msf_expiration(coach['date_to']) >= 6">
              <BootstrapIcon
                  class="text-success"
                  name="check-lg"/>
            </span>

          <span
              v-else-if="msf_expiration(coach['date_to']) < 6 && msf_expiration(coach['date_to']) >= 0">
              <BootstrapIcon
                  class="text-warning"
                  name="exclamation-triangle-fill"/>
            </span>

          <span
              v-else-if="msf_expiration(coach['date_to']) <= 0">
              <BootstrapIcon
                  class="text-danger"
                  name="x"/>
            </span>
        </div>

        <div
            v-else>
          &nbsp;
        </div>
      </td>

      <td>
        <div
            v-if="coach['msf_id'] > 0">
          Update: {{ coach['frtp_date_from'] }}

          <span
              v-if="frtp_expiration(coach['frtp_date_from']) <= 365">
              <BootstrapIcon
                  class="text-success"
                  name="check-lg"/>
            </span>

          <span
              v-else-if="frtp_expiration(coach['frtp_date_from']) >= 365 && frtp_expiration(coach['frtp_date_from']) < 730">
              <BootstrapIcon
                  class="text-warning"
                  name="exclamation-triangle-fill"/>
            </span>

          <span
              v-else-if="frtp_expiration(coach['frtp_date_from']) >= 730">
              <BootstrapIcon
                  class="text-danger"
                  name="x"/>
            </span>

          <div
              v-else>
            &nbsp;
          </div>
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