<script setup lang="ts">
import {boolean, object, string} from "yup";
import {Form} from "vee-validate";

const {choices, createCoupon, formObj, getChoices} = useAdminCoupon();

const {loadingState} = usePageLoading();

const route = useRoute();

const schema = object({
  amount: string().required(),
  class_type: string().required(),
  is_active: boolean(),
  name: string().required()
});

definePageMeta({
  description: 'Create coupon',
  layout: 'admin',
  title: 'Create Coupon'
});

onMounted(async () => {
  loadingState.isActive = true;

  await getChoices();

  loadingState.isActive = false;
});

useHead({
  title: `${route.meta['title']}`
});
</script>

<template>
  <div
      class="mt-3">
    <Form
        :validation-schema="schema"
        @submit="createCoupon">

      <div
          class="row">
        <div
            class="col-md-6">
          <FormText
              v-on:change="formObj['name'].toLowerCase()"
              v-model="formObj['name']"
              :required="true"
              label="Name"
              name="name"/>
        </div>

        <div
            class="col-md-6">
          <FormSelect
              v-model="formObj['class_type']"
              :options="choices['class']"
              :required="true"
              label="Class Type"
              name="class_type"/>
        </div>

        <div
            class="col-md-6">
          <FormText
              v-model="formObj['amount']"
              :required="true"
              label="Amount"
              name="amount"/>
        </div>

        <div
            class="col-md-6">
          <FormSwitch
              v-model="formObj['is_active']"
              label="Active"
              name="is_active"/>
        </div>
      </div>

      <button
          class="px-4 btn btn-outline-success mt-3"
          type="submit">
        Create
      </button>
    </Form>
  </div>
</template>

<style scoped>

</style>