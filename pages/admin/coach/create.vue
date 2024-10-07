<script setup lang="ts">
import {object, string} from "yup";
import {Form} from "vee-validate";

const {createCoach, formObj} = useAdminCoach();

const route = useRoute();

const schema = object({
  address: string().required(),
  city: string().required(),
  date_to: string().required(),
  email: string().email().required(),
  frtp_date_from: string().required(),
  msf_id: string(),
  name: string().required(),
  phone: string().required(),
  state: string().required(),
  zipcode: string().required()
});

definePageMeta({
  description: 'Create coach',
  layout: 'admin',
  title: 'Create Coach'
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
          @submit="createCoach">
        <div
            class="row">
          <div
              class="col-md-6">
            <FormText
                v-model="formObj['name']"
                :required="true"
                label="Name"
                name="name"/>
          </div>

          <div
              class="col-md-6">
            <FormText
                v-model="formObj['address']"
                :required="true"
                label="Address"
                name="address"/>
          </div>

          <div
              class="col-md-4">
            <FormText
                v-model="formObj['city']"
                :required="true"
                label="City"
                name="city"/>
          </div>

          <div
              class="col-md-4">
            <FormSelectState
                v-model="formObj['state']"
                :required="true"
                country="US"
                label="State"
                name="state"/>
          </div>

          <div
              class="col-md-4">
            <FormText
                v-model="formObj['zipcode']"
                :required="true"
                label="Zipcode"
                name="zipcode"/>
          </div>

          <div
              class="col-md-6">
            <FormText
                v-model="formObj['email']"
                :required="true"
                label="Email"
                name="email"/>
          </div>

          <div
              class="col-md-6">
            <FormText
                v-model="formObj['phone']"
                :required="true"
                label="Phone"
                name="phone"/>
          </div>

          <div
              class="col-md-4">
            <FormText
                v-model="formObj['msf_id']"
                :required="false"
                label="MSF ID"
                name="msf_id"/>
          </div>

          <div
              class="col-md-4">
            <FormTextDate
                v-model="formObj['date_to']"
                :required="true"
                help-text="YYYY-MM-DD"
                label="MSF Expiration Date"
                name="date_to"/>
          </div>

          <div
              class="col-md-4">
            <FormTextDate
                v-model="formObj['frtp_date_from']"
                :required="true"
                help-text="YYYY-MM-DD"
                label="FRTP Update Date"
                name="frtp_date_from"/>
          </div>
        </div>

        <button
            class="px-4 btn btn-success mt-3"
            type="submit">
          Create
        </button>
      </Form>
    </div>
  </div>
</template>

<style scoped>

</style>