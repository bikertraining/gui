<template>
    <div id="top"
         class="row pt-3">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3">
            <div class="card rounded-3 shadow-sm">
                <div class="card-body">
                    <h4 class="mb-3">
                        <font-awesome-icon :icon="['fa-solid', 'user-plus']"/>
                        Registration
                    </h4>

                    <Form :validation-schema="schema"
                          @submit="submitRegistration">
                        <input-text v-model="formObj.class_type"
                                    :required="false"
                                    name="class_type"
                                    type="hidden"/>

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

                            <div class="col-md-12">
                                <input-select v-model="formObj.schedule"
                                              :options="getSchedule(formArr)"
                                              :required="true"
                                              help-text="Date of class you are signing up for"
                                              label="Schedule"
                                              name="schedule"
                                              v-on:change="updatePrice(formObj.schedule)"/>
                            </div>
                        </div>

                        <hr class="my-4">

                        <h4 class="mb-3">
                            <font-awesome-icon :icon="['fa-solid', 'bicycle']"/>
                            Experience
                        </h4>

                        <div class="row gy-3">
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

                        <hr class="my-4">

                        <h4 class="mb-3">
                            <font-awesome-icon :icon="['fa-solid', 'credit-card']"/>
                            Payment
                        </h4>

                        <div class="row gy-3">
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

                        <div class="row gy-3">
                            <div class="col-md-4 fw-bolder">Total ${{ priceObj.amount }}</div>
                        </div>

                        <hr class="my-4">

                        <div v-if="nonFieldFormError"
                             class="text-danger mb-3">
                            {{ nonFieldFormMessage }}
                        </div>

                        <button class="w-100 btn btn-success btn-lg"
                                type="submit">
                            <font-awesome-icon :icon="['fa-solid', 'lock']"/>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="card rounded-3 shadow-sm">
                <div class="card-body">
                    <div>
                        <h4 class="mb-3">
                            <font-awesome-icon :icon="['fas', 'triangle-exclamation']"
                                               class="text-danger"/>
                            Notice
                        </h4>

                        After submitting your application, you will receive an email by the next business day (or before
                        your class starts) confirming your enrollment and providing all details about your specific
                        class. If you’d prefer to enroll on the phone, give us a call at
                        <a class="text-dark text-decoration-none"
                           v-bind:href="'tel:' + business_phone.replace(/-/g,'')">{{ business_phone }}</a>.
                    </div>

                    <div class="mt-3">
                        <h4 class="mb-3">Can-AM Spyder Training</h4>

                        For a limited time, those that want to enroll in the 3-Wheel Basic RiderCourse on a Can-Am
                        Spyder for only ${{ threewbrc_special_canam }} <a class="text-decoration-none"
                                                                          href="https://bit.ly/2Dr72tB"
                                                                          target="_blank">CLICK HERE</a>. Then select
                        “Florida” and then “Pensacola”.
                    </div>

                    <div class="mt-3">
                        <a href="https://letsencrypt.org/"
                           target="_blank"> <img alt="Let's Encrypt"
                                                 height="100"
                                                 src="img/le-logo-standard.svg"> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { InputSelect, InputSelectState, InputText, InputTextArea } from "@/components";
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

        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

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

        const threewbrc_special_canam = process.env.VUE_APP_PRICE_THREEWBRC_SPECIAL_CANAM;

        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();

            getDefaults(route.params);

            getSchedule();
        });

        return {
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
            priceObj,
            schema,
            threewbrc_special_canam
        };
    },
    methods: {
        classDate(date_from: string, date_to: string) {
            const start = dayjs(date_from).format('MMM D');
            const end = dayjs(date_to).format('D, YYYY');

            if (date_from === date_to) {
                return start + dayjs(date_to).format(', YYYY');
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