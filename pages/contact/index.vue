<script lang="ts"
        setup>
import { object, string } from "yup";

const { formObj, submitContact } = useClientContact();

const route = useRoute();

const { getBusinessEmail, getBusinessPhone } = useUtils();

const schema = object({
    email: string().required().email(),
    message: string().required(),
    name: string().required(),
    phone: string()
});

definePageMeta({
    auth: false,
    description: 'Contact Us',
    keywords: 'contact us, contact us page, contact us page design, contact page, contact us form, contact us page generator, contact page design, contact us page template, contact us template, best contact page design, contact us at, contact us design, contact website, contact me page, website contact page, contact us text, best contact us pages, contact us on, contact us page sample, contact us website, contact us content, contact us form for website, contact us page content, contact us form design, google business profile customer service',
    title: 'Contact Us'
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5 pt-3">
        <h1 class="d-flex flex-row fw-bold fs-3">
            <svg aria-hidden="true"
                 class="text-dark me-2 mt-1 mb-3"
                 data-icon="envelope"
                 data-prefix="fa-solid"
                 focusable="false"
                 role="img"
                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                 viewBox="0 0 512 512"
                 xmlns="http://www.w3.org/2000/svg">
                <path class=""
                      d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                      fill="currentColor"/>
            </svg>

            Contact Us
        </h1>

        <div class="d-flex flex-row mb-3">
            If you have any questions / concerns please let us know.
        </div>

        <div class="d-flex flex-row mb-3">
            <span class="fw-bold">Phone:</span>&nbsp; <a class="text-dark text-decoration-none"
                                                         v-bind:href="'tel:' + getBusinessPhone(true)">
            {{ getBusinessPhone(false) }}</a>
        </div>

        <div class="d-flex flex-row mb-3">
            <span class="fw-bold">Email:</span>&nbsp;<a class="text-decoration-none"
                                                        v-bind:href="'mailto:' + getBusinessEmail()">
            {{ getBusinessEmail() }}</a>
        </div>

        <div class="d-flex flex-row mb-3">
            <span class="fw-bold">Mailing Address:</span>&nbsp;Biker Training LLC<br>&nbsp;6385 Pensacola Blvd<br>&nbsp;Pensacola,
            Florida, 32505
        </div>

        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="submitContact">
                <div class="row g-3">
                    <div class="col-md-6">
                        <FormText v-model="formObj['name']"
                                  :required="true"
                                  label="Name"
                                  name="name"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['email']"
                                  :required="true"
                                  label="Email"
                                  name="email"
                                  type="email"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['phone']"
                                  :required="false"
                                  label="Phone Number"
                                  name="phone"
                                  type="tel"/>
                    </div>

                    <div class="col-md-6">
                        <FormSwitch v-model="formObj['can_email']"
                                    help-text="We only send on average 4 emails per year."
                                    label="Notify me about upcoming events"
                                    name="can_email"/>
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