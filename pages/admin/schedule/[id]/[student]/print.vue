<script setup lang="ts">
const {formObj, getPrint} = useAdminRegister();

const {loadingState} = usePageLoading();

const route = useRoute();

definePageMeta({
  description: 'Print registration',
  layout: 'admin',
  title: 'Print Registration'
});

onMounted(async () => {
  loadingState.isActive = true;

  await getPrint(route.params['id'].toString(), route.params['student'].toString());

  loadingState.isActive = false;
});

useHead({
  title: `${route.meta['title']}`
});
</script>

<template>
  <div
      class="my-3 mx-1">
    <div
        class="bg-dark-subtle fw-bold ps-2 py-2 text-dark">
      Name
    </div>

    <div
        class="ps-2 py-2">
      {{ formObj['first_name'] }} {{ formObj['last_name'] }}
    </div>

    <div
        class="bg-dark-subtle fw-bold ps-2 py-2 text-dark">
      Address
    </div>

    <div
        class="ps-2 py-2">
      {{ formObj['address'] }}<br> {{ formObj['city'] }}, {{ formObj['state'] }} {{ formObj['zipcode'] }}
    </div>

    <div
        class="bg-dark-subtle fw-bold ps-2 py-2 text-dark">
      Phone
    </div>

    <div
        class="ps-2 py-2">
      {{ formObj['phone'] }}
    </div>

    <div
        class="bg-dark-subtle fw-bold ps-2 py-2 text-dark">
      Email
    </div>

    <div
        class="ps-2 py-2">
      {{ formObj['email'] }}
    </div>

    <div
        class="bg-dark-subtle fw-bold ps-2 py-2 text-dark">
      Drivers License Number
    </div>

    <div
        class="ps-2 py-2">
      {{ formObj['dln'] }}
    </div>

    <div
        class="bg-dark-subtle fw-bold ps-2 py-2 text-dark">
      Date of Birth
    </div>

    <div
        class="ps-2 py-2">
      {{ formObj['dob'] }}
    </div>

    <div
        class="bg-dark-subtle fw-bold ps-2 py-2 text-dark">
      License State of Issue
    </div>

    <div
        class="ps-2 py-2">
      {{ formObj['dls'] }}
    </div>

    <div
        class="bg-dark-subtle fw-bold ps-2 py-2 text-dark">
      Class Schedule
    </div>

    <div
        class="ps-2 py-2">
      <div>
        {{ formObj['schedule_date'] }} ({{ formObj['schedule_day'] }})
      </div>

      <div>
        {{ formObj['class_type'] }} - ${{ formObj['amount'] }}
      </div>
    </div>

    <div
        class="bg-dark-subtle fw-bold ps-2 py-2 text-dark">
      Credit Card
    </div>

    <div
        class="ps-2 py-2">
      {{ formObj['credit_card_number'] }}

      <span
          v-if="formObj['coupon_code'] !== ''">
        with Coupon Code: {{ formObj['coupon_code'] }}
      </span>
    </div>

    <div
        class="bg-dark-subtle fw-bold ps-2 py-2 text-dark">
      Experience
    </div>

    <div
        class="ps-2 py-2">
      {{ formObj['xpl'] }}
    </div>

    <div
        v-if="formObj['comment'] !== ''"
        class="bg-dark-subtle fw-bold ps-2 py-2 text-dark">
      Comments
    </div>

    <div
        v-if="formObj['comment'] !== ''"
        class="ps-2 py-2">
      {{ formObj['comment'] }}
    </div>
  </div>
</template>

<style scoped>
div {
  -webkit-print-color-adjust: exact;
}
</style>