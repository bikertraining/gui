<template>
    <div class="py-5 pt-3 row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3">
            <Form :validation-schema="schema"
                  @submit="submitRegistration">
                <input-text v-model="formObj.class_type"
                            :required="false"
                            name="class_type"
                            type="hidden"/>

                <h4 class="mb-3">
                    <font-awesome-icon :icon="['fa-solid', 'calendar-days']"/>
                    Available Classes
                </h4>

                <div class="row g-3">
                    <div class="col-md-12">
                        <input-select-schedule v-model="formObj.schedule"
                                               :options="getSchedule(formArr)"
                                               :required="true"
                                               help-text="Date of class you are signing up for"
                                               label="Schedule"
                                               name="schedule"
                                               v-on:change="updatePrice(formObj.schedule)"/>
                    </div>

                    <div class="col-md-4 fw-bolder mt-0">Total ${{ priceObj.amount }}</div>
                </div>

                <hr class="my-4">

                <h4 class="mb-3">
                    <font-awesome-icon :icon="['fa-solid', 'user-plus']"/>
                    Registration
                </h4>

                <div class="row g-3">
                    <div class="col-sm-6">
                        <input-text v-model="formObj.first_name"
                                    :required="true"
                                    help-text="As printed on your Drivers License"
                                    label="First Name"
                                    name="first_name"/>
                    </div>

                    <div class="col-sm-6">
                        <input-text v-model="formObj.last_name"
                                    :required="true"
                                    help-text="As printed on your Drivers License"
                                    label="Last Name"
                                    name="last_name"/>
                    </div>

                    <div class="col-12">
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
                                    name="zipcode"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.email"
                                    :required="true"
                                    label="Email"
                                    name="email"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.phone"
                                    :required="true"
                                    label="Phone Number"
                                    name="phone"/>
                    </div>

                    <div class="col-md-4">
                        <input-text v-model="formObj.dln"
                                    :required="true"
                                    label="Drivers License Number"
                                    name="dln"/>
                    </div>

                    <div class="col-md-4">
                        <input-select-state v-model="formObj.dls"
                                            v-model:region="formObj.dls"
                                            :required="true"
                                            country="US"
                                            label="License State of Issue"
                                            name="dls"/>
                    </div>

                    <div class="col-md-4">
                        <input-text v-model="formObj.dob"
                                    :required="true"
                                    help-text="MM/DD/YYYY"
                                    label="Date of Birth"
                                    max-length="10"
                                    name="dob"/>
                    </div>
                </div>

                <hr class="my-4 mt-0">

                <h4 class="mb-3">
                    <font-awesome-icon :icon="['fa-solid', 'bicycle']"/>
                    Experience
                </h4>

                <div class="row g-3">
                    <div class="col-md-6">
                        <input-select v-model="formObj.xpl"
                                      :options="{
                                                  'none': 'None',
                                                  'some': 'Some, but a long time ago',
                                                  '1_6': '1 to 6 months',
                                                  '6_12': '6 to 12 months',
                                                  'more': 'More than one year',
                                                  'dirt': 'Dirt bike only'
                                              }"
                                      :required="false"
                                      label="Current Level of Motorcycle Experience"
                                      name="xpl"/>
                    </div>

                    <div class="col-md-12">
                        <input-text-area v-model="formObj.comment"
                                         :required="false"
                                         help-text="Anything we should be aware of?"
                                         label="Comments"
                                         name="comment"
                                         rows="3"/>
                    </div>
                </div>

                <hr class="my-4 mt-0">

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
                </div>

                <div v-if="nonFieldFormError"
                     class="text-danger my-3">
                    {{ nonFieldFormMessage }}
                </div>

                <button class="w-100 btn btn-success btn-lg"
                        type="submit">
                    <font-awesome-icon :icon="['fa-solid', 'lock']"/>
                    Register
                </button>
            </form>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h4 class="mb-3">
                <font-awesome-icon :icon="['fas', 'triangle-exclamation']"
                                   class="text-danger"/>
                Notice
            </h4>

            <div class="mb-3">After submitting your application, you will receive an email by the next business day (or
                before your class starts) confirming your enrollment and providing all details about your specific
                class. If you’d prefer to enroll on the phone, give us a call at
                <a class="text-dark text-decoration-none"
                   v-bind:href="'tel:' + business_phone.replace(/-/g,'')">{{ business_phone }}</a>.
            </div>

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
                    class to obtain a partial refund. A partial refund is full tuition minus a ${{
                        price_processing_fee
                    }} processing fee.
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
import { InputSelect, InputSelectSchedule, InputSelectState, InputText, InputTextArea } from "@/components";
import { useClientRegister } from "@/composables";
import dayjs from "dayjs";
import { Form } from "vee-validate";
import { defineComponent, onMounted } from "vue";
import { object, string } from "yup";
import { useRoute } from "vue-router";

export default defineComponent({
    name: "TheRegister",
    components: {
        Form,
        InputSelect,
        InputSelectSchedule,
        InputSelectState,
        InputText,
        InputTextArea
    },
    setup() {
        const {
            createStudent,
            formArr,
            formErrors,
            formObj,
            formSuccess,
            getDefaults,
            getPrice,
            getSchedule,
            nonFieldFormError,
            nonFieldFormMessage,
            priceObj
        } = useClientRegister();

        const business_email = process.env.VUE_APP_BUSINESS_EMAIL;

        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        const price_processing_fee = process.env.VUE_APP_PRICE_PROCESSING_FEE;

        const route = useRoute();

        const id = route.params.id;

        const schema = object({
            address: string().required(),
            city: string().required(),
            class_type: string().required(),
            comment: string(),
            credit_card_cvv2: string().required().min(3).max(4),
            credit_card_month: string().required().min(1).max(2),
            credit_card_name: string().required(),
            credit_card_number: string().required().min(15).max(16),
            credit_card_year: string().required().length(4),
            dln: string().required(),
            dls: string().required(),
            dob: string().required(),
            email: string().required().email(),
            first_name: string().required(),
            last_name: string().required(),
            phone: string().required(),
            schedule: string().required(),
            state: string().required(),
            xpl: string(),
            zipcode: string().required()
        });

        onMounted(() => {
            getDefaults(route.params);

            getSchedule();
        });

        return {
            business_email,
            business_phone,
            createStudent,
            formArr,
            formErrors,
            formObj,
            formSuccess,
            getPrice,
            id,
            nonFieldFormError,
            nonFieldFormMessage,
            price_processing_fee,
            priceObj,
            schema
        };
    },
    methods: {
        classDate(date_from: string, date_to: string) {
            const start = dayjs(date_from).format('MMM D');
            const end = dayjs(date_to).format('D, YYYY');

            const start_day = dayjs(date_from).format('D');
            const end_day = dayjs(date_to).format('D');

            const start_month = dayjs(date_from).format('MM');
            const end_month = dayjs(date_to).format('MM');

            if (date_from === date_to) {
                return start + dayjs(date_to).format(', YYYY');
            } else if (start_month > end_month) {
                return dayjs(date_from).format('MMM D, YYYY') + '-' + dayjs(date_to).format('MMM D, YYYY');
            } else if (start_day > end_day) {
                return start + '-' + dayjs(date_to).format('MMM D, YYYY');
            } else {
                return start + '-' + end;
            }
        },
        getSchedule(values: any) {
            const schedule = {};

            values.forEach((val: string) => {
                if (val['seats'] > 0) {
                    const class_type = val['class_type_name'];

                    const dates = this.classDate(val['date_from'], val['date_to']);

                    const day_type = val['day_type_name'];

                    schedule[val['id']] = dates + ' | ' + day_type + ' | ' + class_type;
                }
            });

            return schedule;
        },
        async submitRegistration(values: Record<string, any>, actions: { setErrors: (arg0: Record<string, unknown>) => void; }) {
            await this.createStudent(values);

            if (!this.formSuccess) {
                actions.setErrors(this.formErrors);
            } else {
                await this.$router.push({
                    name: 'client:register:confirmation',
                    params: {
                        class_type: values['class_type']
                    }
                });
            }
        },
        async updatePrice(id: number | string | string[]) {
            await this.getPrice(id);
        }
    }
});
</script>