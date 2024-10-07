<script setup lang="ts">
import {boolean, object, string} from "yup";
import {Form} from "vee-validate";

const {formObj, getEdit, updatePrice} = useAdminPrice();

const {loadingState} = usePageLoading();

const route = useRoute();

const schema = object({
  amount: string().required(),
  is_active: boolean()
});

definePageMeta({
  description: 'Edit price',
  layout: 'admin',
  title: 'Edit Price'
});

onMounted(async () => {
  loadingState.isActive = true;

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
    <div
        class="d-inline-flex">
      <Form
          :validation-schema="schema"
          @submit="updatePrice">
        <FormHidden
            v-model="formObj['id']"
            :required="true"
            name="id"/>

        <div
            class="row">
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
            <FormText
                v-model="formObj['re_amount']"
                :required="true"
                label="Re-Enrollment Amount"
                name="re_amount"/>
          </div>

          <div
              class="col-md-6">
            <FormText
                v-model="formObj['process_amount']"
                :required="true"
                label="Cancellation Fee"
                name="process_amount"/>
          </div>

          <div
              class="col-md-6">
            <FormSwitch
                v-model="formObj['is_active']"
                help-text="Should this charge be processed?"
                label="Charge Mode"
                name="is_active"/>
          </div>
        </div>

        <button
            class="px-4 btn btn-outline-success mt-3"
            type="submit">
          Update
        </button>
      </Form>
    </div>
  </div>
</template>

<style scoped>

</style>