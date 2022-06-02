<template>
    <div class="py-5 pt-3 row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <Form :validation-schema="schema"
                  @submit="submitPayment">
                <h4 class="mb-3">
                    <svg aria-hidden="true"
                         class="text-dark"
                         data-icon="credit-card"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 576 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M512 32C547.3 32 576 60.65 576 96V128H0V96C0 60.65 28.65 32 64 32H512zM576 416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V224H576V416zM112 352C103.2 352 96 359.2 96 368C96 376.8 103.2 384 112 384H176C184.8 384 192 376.8 192 368C192 359.2 184.8 352 176 352H112zM240 384H368C376.8 384 384 376.8 384 368C384 359.2 376.8 352 368 352H240C231.2 352 224 359.2 224 368C224 376.8 231.2 384 240 384z"
                              fill="currentColor"/>
                    </svg>

                    Payment
                </h4>

                <div class="row g-3">
                    <div class="col-md-6">
                        <input-text v-model="formObj.credit_card_first_name"
                                    :required="true"
                                    help-text="First name as displayed on card"
                                    label="First Name"
                                    name="credit_card_first_name"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.credit_card_last_name"
                                    :required="true"
                                    help-text="Last name as displayed on card"
                                    label="Last Name"
                                    name="credit_card_last_name"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.credit_card_number"
                                    :required="true"
                                    label="Credit Card Number"
                                    max-length="16"
                                    name="credit_card_number"
                                    type="tel"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.credit_card_cvv2"
                                    :required="true"
                                    label="CVV"
                                    max-length="4"
                                    name="credit_card_cvv2"
                                    type="tel"/>
                    </div>

                    <div class="col-md-6">
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

                    <div class="col-md-6">
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

                    <div class="col-md-12">
                        <input-text v-model="formObj.address"
                                    :required="true"
                                    label="Address"
                                    name="address"/>
                    </div>

                    <div class="col-md-5">
                        <input-text v-model="formObj.city"
                                    :required="true"
                                    label="City"
                                    name="city"/>
                    </div>

                    <div class="col-md-4">
                        <input-select-state v-model="formObj.state"
                                            v-model:region="formObj.state"
                                            :required="true"
                                            country="US"
                                            label="State"
                                            name="state"/>
                    </div>

                    <div class="col-md-3">
                        <input-text v-model="formObj.zipcode"
                                    :required="true"
                                    label="Zipcode"
                                    max-length="28"
                                    name="zipcode"
                                    type="tel"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.first_name"
                                    :required="true"
                                    help-text="Student's first name as printed on Drivers License"
                                    label="First Name"
                                    name="first_name"/>
                    </div>

                    <div class="col-md-6">
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
                                    name="email"
                                    type="email"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.phone"
                                    :required="true"
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"/>
                    </div>
                </div>

                <div v-if="nonFieldFormError"
                     class="text-danger my-3">
                    {{ nonFieldFormMessage }}
                </div>

                <div class="col-md-4 fw-bolder mt-0 mb-3">Total ${{ price_brc }}</div>

                <div class="mb-3">
                    <span class="fw-bold">Protected by</span> <img alt="Let's Encrypt"
                                                                   height="50"
                                                                   src="/img/le-logo-wide.svg"/>
                </div>

                <button class="w-100 btn btn-success btn-lg"
                        type="submit">
                    <svg aria-hidden="true"
                         class="text-white"
                         data-icon="lock"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 448 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"
                              fill="currentColor"/>
                    </svg>

                    Submit Payment
                </button>
            </form>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="mb-3">
                <img alt="Pensacola Harley-Davidson"
                     class="d-block img-fluid mt-5"
                     src="/img/phd.svg"
                     style="height: 100px;">
            </div>

            <div class="mb-3">You can use this form to pay online for your class or give us a call at
                <a class="text-dark text-decoration-none"
                   v-bind:href="'tel:' + business_phone.replace(/-/g,'')">{{ business_phone }}</a>.
            </div>

            <div class="mb-3">Please ensure the First and Last name is that of the student who is enrolled.</div>
        </div>
    </div>
</template>

<script lang="ts">
import { InputSelect, InputSelectState, InputText } from "@/components";
import { useClientPayment } from "@/composables";
import { Form } from "vee-validate";
import { defineComponent } from "vue";
import { object, string } from "yup";

export default defineComponent({
    name: "ThePayment",
    components: {
        Form,
        InputSelect,
        InputSelectState,
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
            city: string().required(),
            credit_card_cvv2: string().required().min(3).max(4),
            credit_card_first_name: string().required(),
            credit_card_last_name: string().required(),
            credit_card_month: string().required().min(1).max(2),
            credit_card_number: string().required().min(15).max(16),
            credit_card_year: string().required().length(4),
            email: string().required().email(),
            first_name: string().required(),
            last_name: string().required(),
            phone: string().required(),
            state: string().required(),
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