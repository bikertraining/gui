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

                    <h4 class="mb-3">
                        <svg aria-hidden="true"
                             class="text-dark"
                             data-icon="user-plus"
                             data-prefix="fa-solid"
                             focusable="false"
                             role="img"
                             style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                             viewBox="0 0 640 512"
                             xmlns="http://www.w3.org/2000/svg">
                            <path class=""
                                  d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"
                                  fill="currentColor"/>
                        </svg>

                        Student Information
                    </h4>

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

                <div class="col-md-4 fw-bolder mt-0 mb-3">Total ${{ formPrice.brc.amount.slice(0, -3) }}</div>

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

            <div>Please ensure the First and Last name is that of the student who is enrolled.</div>

            <hr class="w-100 mx-auto my-4 border-1">

            <div>
                <h6>REFUND/CANCELLATION POLICY</h6>

                <div class="mb-3">When enrolling, you are purchasing a seat in the class of your choice. Once purchased,
                    that seat is set aside for only your use. Please select the date that will ensure you can attend
                    each day for the times indicated. You must attend all class/range sessions.
                </div>

                <div class="mb-3"><span class="fw-bold">Cancellation:</span> All fees are nonrefundable unless students
                    call <a class="text-dark text-decoration-none"
                            v-bind:href="'tel:' + business_phone.replace(/-/g,'')">{{ business_phone }}</a> or email
                    <a v-bind:href="'mailto:' + business_email">{{ business_email }}</a> 6 days prior to their scheduled
                    class to obtain a partial refund. A partial refund is full tuition minus a
                    ${{ formPrice.brc.process_amount.slice(0, -3) }} processing fee.
                </div>

                <div class="mb-3">There is a minimum of four students per class. If minimum is not met, student has
                    option to move to any future class or receive a full refund.
                </div>

                <div class="mb-3"><span class="fw-bold">Postponement:</span> There is no charge for postponement
                    provided the student calls or emails at least 48 hours prior to the start of their scheduled class.
                    If less than 48 hours prior or if a student does not complete the entire class, a seat in a
                    subsequent class may be purchased.
                </div>

                <div class="mb-3"><span class="fw-bold">Late Arrivals:</span> Learning to ride a motorcycle requires
                    skill progression. This progression begins with small tasks and builds to larger, more complex
                    tasks. It is critical that students arrive on time. Preferably, come early! If you miss a class or
                    range session, you will not be allowed to complete the course and will have to purchase another seat
                    in a later class.
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { InputSelect, InputSelectState, InputText } from "@/components";
import { useClientPayment, useClientPrice } from "@/composables";
import { Form } from "vee-validate";
import { defineComponent, onMounted } from "vue";
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

        const {
            formObj: formPrice,
            getPrices
        } = useClientPrice();

        const business_email = process.env.VUE_APP_BUSINESS_EMAIL;

        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

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

        onMounted(() => {
            getPrices();
        });

        return {
            business_email,
            business_phone,
            createPayment,
            formErrors,
            formObj,
            formPrice,
            formSuccess,
            nonFieldFormError,
            nonFieldFormMessage,
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