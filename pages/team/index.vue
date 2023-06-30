<script lang="ts"
        setup>
import { object, string } from "yup";

const { formObj, submitContact } = useClientTeam();

const route = useRoute();

const schema = object({
    email: string().required().email(),
    message: string().required(),
    name: string().required(),
    phone: string().required()
});

const { getBusinessEmail, getBusinessPhone } = useUtils();

definePageMeta({
    auth: false,
    description: 'Become a RiderCoach',
    keywords: 'rider coach, ridercoach, coach, teach, teacher, instructor',
    title: 'Join our Team'
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5 pt-3">
        <h1 class="d-flex flex-row fw-bold fs-4">
            <svg aria-hidden="true"
                 class="text-dark me-2 mt-1 mb-3"
                 data-icon="book-open-reader"
                 data-prefix="fa-solid"
                 focusable="false"
                 role="img"
                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                 viewBox="0 0 512 512"
                 xmlns="http://www.w3.org/2000/svg">
                <path class=""
                      d="M352 96c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM240 248V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"
                      fill="currentColor"/>
            </svg>

            Join our Team
        </h1>

        <div class="d-flex flex-row mb-3">
            Are you interested in becoming a RiderCoach or are you already a RiderCoach? We should talk!
        </div>

        <div class="flex-row mb-3">
            Read our
            <NuxtLink class="text-decoration-none"
                      to="/team/faq">RiderCoach FAQ
            </NuxtLink>
            to help answer most questions.
        </div>

        <div class="d-flex flex-row mb-3">
            <span class="fw-bold">Phone:</span>&nbsp;<a class="text-dark text-decoration-none"
                                                        v-bind:href="'tel:' + getBusinessPhone(true)">
            {{ getBusinessPhone(false) }}</a>
        </div>

        <div class="d-flex flex-row mb-3">
            <span class="fw-bold">Email:</span>&nbsp;<a class="text-decoration-none"
                                                        v-bind:href="'mailto:' + getBusinessEmail()">
            {{ getBusinessEmail() }}</a>
        </div>

        <div class="d-flex flex-row mb-3">
            Use the form below and we'll contact you to setup a day and time we can meet up in person.
        </div>

        <div class="d-flex flex-row mb-3">
            We will tour our training facility and go over all your questions and concerns.
        </div>

        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="submitContact">
                <div class="row g-3">
                    <div class="col-md-12">
                        <FormText v-model="formObj['name']"
                                  :required="true"
                                  label="Name"
                                  name="name"/>
                    </div>

                    <div class="col-md-12">
                        <FormText v-model="formObj['email']"
                                  :required="true"
                                  label="Email"
                                  name="email"
                                  type="email"/>
                    </div>

                    <div class="col-md-12">
                        <FormText v-model="formObj['phone']"
                                  :required="true"
                                  label="Phone Number"
                                  name="phone"
                                  type="tel"/>
                    </div>

                    <div class="col-12">
                        <FormTextArea v-model="formObj['message']"
                                      :required="true"
                                      label="Questions / Comments"
                                      name="message"
                                      rows="7"/>
                    </div>
                </div>

                <button class="w-100 btn btn-success btn-lg"
                        type="submit">
                    <svg aria-hidden="true"
                         class="text-white"
                         data-icon="comment"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 512 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"
                              fill="currentColor"/>
                    </svg>

                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>