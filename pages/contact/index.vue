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
                        "item": "https://bikertraining.com"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Contact US",
                        "item": "https://bikertraining.com/contact"
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
    <div class="py-5 pt-3">
        <h1 class="d-flex flex-row fw-bold fs-3">
            <svg class="bi me-2 mt-1">
                <use xlink:href="#envelope"/>
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