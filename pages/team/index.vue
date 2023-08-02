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
            <svg class="bi me-2">
                <use xlink:href="#book-open-reader"/>
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
                    <svg class="bi">
                        <use xlink:href="#comment"/>
                    </svg>

                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.bi {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: -.125em;
    overflow: visible;
}
</style>