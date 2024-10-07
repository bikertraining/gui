<script setup lang="ts">
import {object, string} from "yup";
import {Form} from "vee-validate";

const {formObj, submitContact} = useClientContact();

const route = useRoute();

const {getBusinessEmail, getBusinessPhone, getGuiUrl} = useUtils();

const schema = object({
  email: string().required().email(),
  message: string().required(),
  name: string().required(),
  phone: string()
});

definePageMeta({
  auth: false,
  description: 'Contact Us',
  keywords: 'contact us, contact',
  title: 'Contact Us'
});

useHead({
  title: `${route.meta['title']}`,
  script: [
    {
      innerHTML: `
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "${getGuiUrl()}"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Contact US",
                        "item": "${getGuiUrl()}/contact"
                      }
                  ]
                }
                    `,
      type: 'application/ld+json'
    }
  ]
});
</script>

<template>
  <h1
      class="fs-4 mt-3">
    <BootstrapIcon
      name="envelope-at-fill"/>

    Contact Us
  </h1>

  <div>
    If you have any questions / concerns please let us know.
  </div>

  <div
      class="mt-3">
    <span
        class="fw-bold">
      Phone:
    </span>

    <NuxtLink
        v-bind:href="'tel:' + getBusinessPhone(true)"
        class="text-decoration-none">
      {{ getBusinessPhone(false) }}
    </NuxtLink>
  </div>

  <div
      class="mt-3">
    <span
        class="fw-bold">
      Email:
    </span>

    <NuxtLink
        v-bind:href="'mailto:' + getBusinessEmail(true)"
        class="text-decoration-none">
      {{ getBusinessEmail(false) }}
    </NuxtLink>
  </div>

  <div
      class="d-flex flex-row mt-3">
    <span
        class="fw-bold">
      Mailing Address:&nbsp;
    </span>

    Biker Training LLC
    <br>6385 Pensacola Blvd
    <br>Pensacola, Florida, 32505
  </div>

  <Form :validation-schema="schema"
        @submit="submitContact">
    <div
        class="row d-inline-flex">
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
            v-model="formObj['email']"
            :required="true"
            label="Email"
            name="email"
            type="email"/>
      </div>

      <div
          class="col-md-6">
        <FormText
            v-model="formObj['phone']"
            :required="false"
            label="Phone Number"
            name="phone"
            type="tel"/>
      </div>

      <div
          class="col-md-12">
        <FormTextArea
            v-model="formObj['message']"
            :required="true"
            label="Questions / Comments"
            name="message"
            rows="7"/>
      </div>

      <button
          class="btn btn-lg btn-success w-75 mx-2"
          type="submit">
        <BootstrapIcon
            name="chat-fill"/>
        Submit
      </button>
    </div>
  </Form>
</template>

<style scoped>

</style>