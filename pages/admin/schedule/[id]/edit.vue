<script setup lang="ts">
import {object, string} from "yup";
import {Form} from "vee-validate";

const {formArr: formRegisterArr, getSearch} = useAdminRegister();

const {choices, deleteSchedule, formErrors, formObj, getChoices, getEdit, updateSchedule} = useAdminSchedule();

const {loadingState} = usePageLoading();

const route = useRoute();

const router = useRouter();

const schema = object({
  date_from: string().required(),
  date_to: string().required(),
  day_type: string().required(),
  price: string().required(),
  seats: string().required()
});

definePageMeta({
  description: 'Edit schedule',
  layout: 'admin',
  title: 'Edit Schedule'
});

onMounted(async () => {
  loadingState.isActive = true;

  await getChoices();

  await getEdit(route.params['id'].toString());

  await getSearch(route.params['id'].toString());

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
          @submit="updateSchedule">
        <FormHidden
            v-model="formObj['id']"
            :required="true"
            name="id"/>

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

          <div
              class="d-flex justify-content-between">
            <button
                class="px-4 btn btn-outline-success"
                type="submit">
              Update
            </button>

            <ModalDelete
                :delete="deleteSchedule"
                :message-error="formErrors"
                :params="{ id: route.params['id'].toString() }"
                message-alert="Continuing will remove this schedule."
                message-success="Schedule has been removed."
                redirect="/admin/schedule"/>
          </div>
        </div>
      </Form>
    </div>

    <table
        class="table table-striped table-hover caption-top mt-3">
      <caption
          v-if="formRegisterArr.length > 0"
          class="d-print-none fw-bold mb-3 mt-2">
        <BootstrapIcon
            name="exclamation-diamond"/>
        {{ formRegisterArr.length }} Students
      </caption>

      <thead
          v-if="formRegisterArr.length > 0"
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
          Email
        </th>

        <th
            class="w-25"
            scope="col">
          Phone
        </th>
      </tr>
      </thead>

      <tbody
          v-if="formRegisterArr.length > 0">
      <tr
          v-for="register in formRegisterArr"
          v-bind:key="register"
          v-on:click="router.push({ path: `/admin/schedule/${register['schedule']}/${register['id']}/print`})">
        <td>
          {{ register['first_name'] }} {{ register['last_name'] }}
        </td>

        <td>
          {{ register['email'] }}
        </td>

        <td>
          {{ register['phone'] }}
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>
.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
  background-color: #198754;
  color: #FFFFFF;
}
</style>