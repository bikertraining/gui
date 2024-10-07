<script setup lang="ts">
const {formArr, getSearch} = useAdminPrice();

const {loadingState} = usePageLoading();

const route = useRoute();

const router = useRouter();

definePageMeta({
  description: 'Search prices',
  layout: 'admin',
  title: 'Search Prices'
});

onMounted(async () => {
  loadingState.isActive = true;

  await getSearch();

  loadingState.isActive = false;
});

useHead({
  title: `${route.meta['title']}`
});
</script>

<template>
  <table
      class="table table-striped table-hover caption-top mt-3">
    <thead
        v-if="formArr.length > 0"
        class="border border-dark border-2 border-start-0 border-end-0">
    <tr>
      <th
          class="w-25"
          scope="col">
        Course
      </th>

      <th
          class="w-25"
          scope="col">
        Amount
      </th>

      <th
          class="w-25"
          scope="col">
        Charge Status
      </th>
    </tr>
    </thead>

    <tbody
        v-if="formArr.length > 0">
    <tr
        v-for="price in formArr"
        v-bind:key="price"
        v-on:click="router.push({ path: `/admin/price/${price['id']}/edit`})">
      <td>
        {{ price['class_type_name'] }}
      </td>

      <td>
        ${{ price['amount'] }}
      </td>

      <td>
          <span
              v-if="price['is_active']"
              class="text-success">
            Yes
          </span>

        <span
            v-else
            class="text-danger">
            No
          </span>
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