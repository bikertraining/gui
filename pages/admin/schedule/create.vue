<script setup lang="ts">
import {object, string} from "yup";
import {Form} from "vee-validate";

const {choices, createSchedule, formObj, getChoices} = useAdminSchedule();

const {loadingState} = usePageLoading();

const route = useRoute();

const schema = object({
  date_from: string().required(),
  date_to: string().required(),
  day_type: string().required(),
  price: string().required(),
  seats: string().required()
});

definePageMeta({
  description: 'Create schedule',
  layout: 'admin',
  title: 'Create Schedule'
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
    <div
        class="d-inline-flex">
      <Form
          :validation-schema="schema"
          @submit="createSchedule">
        <div
            class="row">
          <div
              class="col-md-6">
            <FormSelect
                v-model="formObj['price']"
                :options="choices['price']"
                :required="true"
                label="Class Type"
                name="price"/>
          </div>

          <div
              class="col-md-6">
            <FormSelect
                v-model="formObj['day_type']"
                :options="choices['day']"
                :required="true"
                label="Day Type"
                name="day_type"/>
          </div>

          <div
              class="col-md-6">
            <FormTextDate
                v-model="formObj['date_from']"
                :required="true"
                help-text="YYYY-MM-DD"
                label="Starting Date"
                name="date_from"/>
          </div>

          <div
              class="col-md-6">
            <FormTextDate
                v-model="formObj['date_to']"
                :required="true"
                help-text="YYYY-MM-DD"
                label="Ending Date"
                name="date_to"/>
          </div>

          <div
              class="col-md-12 mt-3">
            <FormSelect
                v-model="formObj['seats']"
                :options="{
                  '0': 'Class Full',
                  '1': '1',
                  '2': '2',
                  '3': '3',
                  '4': '4',
                  '5': '5',
                  '6': '6',
                  '7': '7',
                  '8': '8',
                  '9': '9',
                  '10': '10',
                  '11': '11',
                  '12': '12'
                }"
                :required="true"
                label="Seats"
                name="seats"/>
          </div>
        </div>

        <button
            class="px-4 btn btn-outline-success"
            type="submit">
          Create
        </button>
      </Form>
    </div>
  </div>
</template>

<style scoped>

</style>