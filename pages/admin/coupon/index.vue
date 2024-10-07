<script setup lang="ts">
const {formArr, getSearch} = useAdminCoupon();

const {loadingState} = usePageLoading();

const route = useRoute();

const router = useRouter();

definePageMeta({
  description: 'Search coupons',
  layout: 'admin',
  title: 'Search Coupons'
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
      class="table table-striped table-hover caption-top">
    <caption
        v-if="formArr.length > 0"
        class="d-print-none fw-bold mb-3 mt-2">
      <BootstrapIcon
          name="exclamation-diamond"/>
      {{ formArr.length }} Coupons
    </caption>

    <thead
        v-if="formArr.length > 0"
        class="border border-dark border-2 border-start-0 border-end-0">
      <tr>
        <th
            class="w-25"
            scope="col">
          Name
        </th>

        <th
            class="w-25"
            scope="col">
          Class Type
        </th>

        <th
            class="w-25"
            scope="col">
          Amount
        </th>

        <th
            class="w-25"
            scope="col">
          Status
        </th>
      </tr>
    </thead>

    <tbody
        v-if="formArr.length > 0">
      <tr
          v-for="coupon in formArr"
          v-bind:key="coupon"
          v-on:click="router.push({ path: `/admin/coupon/${coupon['id']}/edit`})">
        <td>
          {{ coupon['name'] }}
        </td>

        <td>
          {{ coupon['class_type_name'] }}
        </td>

        <td>
          {{ coupon['amount'] }}
        </td>

        <td>
          <span
              v-if="coupon['is_active']"
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