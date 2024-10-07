<script setup lang="ts">
import {object, string} from "yup";
import {Form} from "vee-validate";

const {formObj, submitContact} = useClientTeam();

const route = useRoute();

const schema = object({
  email: string().required().email(),
  message1: string().required(),
  message2: string().required(),
  message3: string().required(),
  message4: string().required(),
  message5: string().required(),
  message6: string().required(),
  message7: string().required(),
  name: string().required(),
  phone: string().required()
});

const {getBusinessEmail, getBusinessPhone, getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'Become a RiderCoach',
  keywords: 'rider coach, ridercoach, coach, teach, teacher, instructor',
  title: 'Join our Team'
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
                        "name": "Join Our Team",
                        "item": "${getGuiUrl()}/team"
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
        name="people-fill"/>
    Join our Team
  </h1>

  <div>
    Are you interested in becoming a RiderCoach or are you already a RiderCoach? We should talk!
  </div>

  <div
      class="mt-3">
    Read our

    <NuxtLink
        class="text-decoration-none"
        to="/team/faq">
      RiderCoach FAQ
    </NuxtLink>

    to help answer most questions.
  </div>

  <div
      class="mt-3">
    Use the form below and we'll contact you to setup a day and time we can meet up in person.
  </div>

  <div
      class="mt-3 mb-3">
    We will tour our training facility and go over all your questions and concerns.
  </div>

  <div
      class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3 mt-3">
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
              :required="true"
              label="Phone Number"
              name="phone"
              type="tel"/>
        </div>

        <div
            class="col-md-12">
          <FormTextArea
              v-model="formObj['message1']"
              :required="true"
              label="What motivates you to be a RiderCoach?"
              name="message1"
              rows="7"/>
        </div>

        <div
            class="col-md-12">
          <FormTextArea
              v-model="formObj['message2']"
              :required="true"
              label="If hired, how long do you plan to stay with the company?"
              name="message2"
              rows="7"/>
        </div>

        <div
            class="col-md-12">
          <FormTextArea
              v-model="formObj['message3']"
              :required="true"
              label="Are you looking for a permanent position or seasonal?"
              name="message3"
              rows="7"/>
        </div>

        <div
            class="col-md-12">
          <FormTextArea
              v-model="formObj['message4']"
              :required="true"
              label="Classes are typically held on Saturday-Sunday, Monday-Tuesday, or Thursday-Friday from 6AM to 4PM, will this conflict with your current schedule?"
              name="message4"
              rows="7"/>
        </div>

        <div
            class="col-md-12">
          <FormTextArea
              v-model="formObj['message5']"
              :required="true"
              label="How do you deal with pressure or stressful situations?"
              name="message5"
              rows="7"/>
        </div>

        <div
            class="col-md-12">
          <FormTextArea
              v-model="formObj['message6']"
              :required="true"
              label="Could you tell me about yourself and describe your background in brief?"
              name="message6"
              rows="7"/>
        </div>

        <div
            class="col-md-12">
          <FormTextArea
              v-model="formObj['message7']"
              :required="true"
              label="Questions / Comments"
              name="message7"
              rows="7"/>
        </div>

        <button
            class="btn btn-success btn-lg w-75 mx-2"
            type="submit">
          <BootstrapIcon
              name="chat-fill"/>
          Submit
        </button>
      </div>
    </Form>
  </div>
</template>

<style scoped>

</style>