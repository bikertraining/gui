<script setup lang="ts">
import {boolean, object, string} from "yup";
import {Form} from "vee-validate";

const {choices, deleteCoupon, formErrors, formObj, getChoices, getEdit, updateCoupon} = useAdminCoupon();

const {loadingState} = usePageLoading();

const route = useRoute();

const schema = object({
  amount: string().required(),
  class_type: string().required(),
  is_active: boolean(),
  name: string().required()
});

definePageMeta({
  description: 'Edit coupon',
  layout: 'admin',
  title: 'Edit Coupon'
});

onMounted(async () => {
  loadingState.isActive = true;

  await getChoices();

  await getEdit(route.params['id'].toString());

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
        @submit="updateCoupon">

      <FormHidden
          v-model="formObj['id']"
          :required="true"
          name="id"/>
      <div
          class="row d-inline-flex">
        <div
            class="col-md-12">
          <FormText
              v-on:change="formObj['name'].toLowerCase()"
              v-model="formObj['name']"
              :required="true"
              label="Name"
              name="name"/>
        </div>

        <div
            class="col-md-12">
          <FormSelect
              v-model="formObj['class_type']"
              :options="choices['class']"
              :required="true"
              label="Class Type"
              name="class_type"/>
        </div>

        <div
            class="col-md-12">
          <FormText
              v-model="formObj['amount']"
              :required="true"
              label="Amount"
              name="amount"/>
        </div>

        <div
            class="col-md-12">
          <FormSwitch
              v-model="formObj['is_active']"
              label="Active"
              name="is_active"/>
        </div>

        <div
            class="d-flex justify-content-between mt-3">
          <button
              class="px-4 btn btn-outline-success"
              type="submit">
            Update
          </button>

          <ModalDelete
              :delete="deleteCoupon"
              :message-error="formErrors"
              :params="{ id: route.params['id'] }"
              message-alert="Continuing will remove this coupon."
              message-success="Coupon has been removed."
              redirect="/admin/coupon"/>
        </div>
      </div>
    </Form>
  </div>
</template>

<style scoped>

</style>