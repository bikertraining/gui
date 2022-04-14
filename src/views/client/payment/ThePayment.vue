<template>
    <div class="py-5 pt-3 row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3">
            <Form :validation-schema="schema"
                  @submit="submitPayment">
                <h4 class="mb-3">
                    <font-awesome-icon :icon="['fa-solid', 'credit-card']"/>
                    Payment
                </h4>

                <div class="row g-3">
                    <div class="col-md-6">
                        <input-text v-model="formObj.credit_card_name"
                                    :required="true"
                                    help-text="Full name as displayed on card"
                                    label="Name"
                                    name="credit_card_name"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.credit_card_number"
                                    :required="true"
                                    label="Credit Card Number"
                                    max-length="16"
                                    name="credit_card_number"/>
                    </div>

                    <div class="col-md-4">
                        <input-select v-model="formObj.credit_card_month"
                                      :options="{
                                                '1': '01',
                                                '2': '02',
                                                '3': '03',
                                                '4': '04',
                                                '5': '05',
                                                '6': '06',
                                                '7': '07',
                                                '8': '08',
                                                '9': '09',
                                                '10': '10',
                                                '11': '11',
                                                '12': '12'
                                              }"
                                      :required="true"
                                      label="Expiration Month"
                                      name="credit_card_month"/>
                    </div>

                    <div class="col-md-4">
                        <input-select v-model="formObj.credit_card_year"
                                      :options="{
                                                '2022': '2022',
                                                '2023': '2023',
                                                '2024': '2024',
                                                '2025': '2025',
                                                '2026': '2026',
                                                '2027': '2027',
                                                '2028': '2028',
                                                '2029': '2029',
                                                '2030': '2030',
                                                '2031': '2031'
                                              }"
                                      :required="true"
                                      label="Expiration Year"
                                      name="credit_card_year"/>
                    </div>

                    <div class="col-md-4">
                        <input-text v-model="formObj.credit_card_cvv2"
                                    :required="true"
                                    label="CVV"
                                    max-length="4"
                                    name="credit_card_cvv2"/>
                    </div>

                    <div class="col-9">
                        <input-text v-model="formObj.address"
                                    :required="true"
                                    help-text="Billing Address"
                                    label="Address"
                                    name="address"/>
                    </div>

                    <div class="col-md-3">
                        <input-text v-model="formObj.zipcode"
                                    :required="true"
                                    help-text="Billing Zipcode"
                                    label="Zipcode"
                                    max-length="28"
                                    name="zipcode"/>
                    </div>

                    <div class="col-sm-6">
                        <input-text v-model="formObj.first_name"
                                    :required="true"
                                    help-text="Student's first name as printed on Drivers License"
                                    label="First Name"
                                    name="first_name"/>
                    </div>

                    <div class="col-sm-6">
                        <input-text v-model="formObj.last_name"
                                    :required="true"
                                    help-text="Student's last name as printed on Drivers License"
                                    label="Last Name"
                                    name="last_name"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.email"
                                    :required="true"
                                    help-text="You will receive an emailed receipt"
                                    label="Email"
                                    name="email"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.phone"
                                    :required="true"
                                    label="Phone Number"
                                    name="phone"/>
                    </div>
                </div>

                <div v-if="nonFieldFormError"
                     class="text-danger my-3">
                    {{ nonFieldFormMessage }}
                </div>

                <div class="col-md-4 fw-bolder mt-0">Total ${{ price_brc }}</div>

                <button class="w-100 btn btn-success btn-lg"
                        type="submit">
                    <font-awesome-icon :icon="['fa-solid', 'lock']"/>
                    Submit Payment
                </button>
            </form>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h4 class="mb-3">
                <font-awesome-icon :icon="['fas', 'triangle-exclamation']"
                                   class="text-danger"/>
                Notice
            </h4>

            <div class="mb-3">You can use this form to pay online for your class or give us a call at
                <a class="text-dark text-decoration-none"
                   v-bind:href="'tel:' + business_phone.replace(/-/g,'')">{{ business_phone }}</a>.
            </div>

            <div class="mb-3">Please ensure the First and Last name is that of the student who is enrolled.</div>
        </div>
    </div>
</template>

<script lang="ts">
import { InputSelect, InputText } from "@/components";
import { useClientPayment } from "@/composables";
import { Form } from "vee-validate";
import { defineComponent } from "vue";
import { object, string } from "yup";

export default defineComponent({
    name: "ThePayment",
    components: {
        Form,
        InputSelect,
        InputText
    },
    setup() {
        const {
            createPayment,
            formErrors,
            formObj,
            formSuccess,
            nonFieldFormError,
            nonFieldFormMessage
        } = useClientPayment();

        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        const price_brc = process.env.VUE_APP_PRICE_BRC;

        const schema = object({
            address: string().required(),
            credit_card_cvv2: string().required().min(3).max(4),
            credit_card_month: string().required().min(1).max(2),
            credit_card_name: string().required(),
            credit_card_number: string().required().min(15).max(16),
            credit_card_year: string().required().length(4),
            email: string().required().email(),
            first_name: string().required(),
            last_name: string().required(),
            phone: string().required(),
            zipcode: string().required()
        });

        return {
            business_phone,
            createPayment,
            formErrors,
            formObj,
            formSuccess,
            nonFieldFormError,
            nonFieldFormMessage,
            price_brc,
            schema
        };
    },
    methods: {
        async submitPayment(values: Record<string, any>, actions: { setErrors: (arg0: Record<string, unknown>) => void; }) {
            await this.createPayment(values);

            if (!this.formSuccess) {
                actions.setErrors(this.formErrors);
            } else {
                await this.$router.push({
                    name: 'client:payment:confirmation'
                });
            }
        }
    }
});
</script>