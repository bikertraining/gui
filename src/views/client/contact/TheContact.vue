<template>
    <div class="py-5 pt-3">
        <h3 class="d-flex flex-row fw-bold">
            <font-awesome-icon :icon="['fa-solid', 'envelope']"
                               class="me-2 mt-1 mb-3"/>
            Contact Us
        </h3>

        <div class="d-flex flex-row mb-3">
            If you have any questions / concerns please let us know.
        </div>

        <div class="d-flex flex-row mb-3">
            <span class="fw-bold">Phone:</span>&nbsp;<a class="text-dark text-decoration-none"
                                                        v-bind:href="'tel:' + business_phone.replace(/-/g,'')">{{
                business_phone
            }}</a>
        </div>

        <div class="d-flex flex-row mb-3">
            <span class="fw-bold">Email:</span>&nbsp;<a class="text-decoration-none"
                                                        href="mailto: sammie@bikertraining.net">sammie@bikertraining.net</a>
        </div>

        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="submitContact">
                <div class="row g-3">
                    <div class="col-md-6">
                        <input-text v-model="formObj.name"
                                    :required="true"
                                    label="Name"
                                    name="name"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.email"
                                    :required="true"
                                    label="Email"
                                    name="email"
                                    type="email"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.phone"
                                    :required="false"
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"/>
                    </div>

                    <div class="col-12">
                        <input-text-area v-model="formObj.message"
                                         :required="true"
                                         label="Questions / Comments"
                                         name="message"
                                         rows="7"/>
                    </div>
                </div>

                <button class="w-100 btn btn-success btn-lg"
                        type="submit">
                    <font-awesome-icon :icon="['fa-solid', 'comment']"/>
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { InputText, InputTextArea } from "@/components";
import { useClientContact } from "@/composables";
import { Form } from "vee-validate";
import { defineComponent } from "vue";
import { object, string } from "yup";

export default defineComponent({
    name: "TheContact",
    components: {
        Form,
        InputText,
        InputTextArea
    },
    setup() {
        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        const {
            formErrors,
            formObj,
            formSuccess,
            sendEmail
        } = useClientContact();

        const schema = object({
            email: string().required().email(),
            message: string().required(),
            name: string().required(),
            phone: string()
        });

        return {
            business_phone,
            formErrors,
            formObj,
            formSuccess,
            schema,
            sendEmail
        };
    },
    methods: {
        async submitContact(values: Record<string, unknown>, actions: { setErrors: (arg0: Record<string, unknown>) => void; }) {
            await this.sendEmail(values);

            if (!this.formSuccess) {
                actions.setErrors(this.formErrors);
            } else {
                await this.$router.push({
                    name: 'client:contact:thanks'
                });
            }
        }
    }
});
</script>