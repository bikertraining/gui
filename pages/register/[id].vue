<script lang="ts"
        setup>
import { boolean, object, string } from "yup";

const {
    formArr,
    formObj,
    getDefaults,
    nonFieldFormError,
    nonFieldFormMessage,
    submitRegistration,
    utilClassDate,
    utilValidateCoupon
} = useClientRegister();

const { loadingState } = usePageLoading();

const couponSchema = object({
    coupon_code: string().required()
});

const route = useRoute();

const schema = object({
    address: string().required(),
    can_email: boolean(),
    city: string().required(),
    class_type: string().required(),
    comment: string(),
    coupon_code: string(),
    credit_card_cvv2: string().required().min(3).max(4),
    credit_card_first_name: string().required(),
    credit_card_last_name: string().required(),
    credit_card_month: string().required().min(1).max(2),
    credit_card_number: string().required().min(15).max(16),
    credit_card_year: string().required().length(4),
    dln: string().required(),
    dls: string().required(),
    dob: string().required(),
    email: string().required().email(),
    first_name: string().required(),
    ipaddress: string(),
    last_name: string().required(),
    phone: string().required(),
    schedule: string().required(),
    state: string().required(),
    xpl: string(),
    zipcode: string().required()
});

const { getBusinessEmail, getBusinessPhone } = useUtils();

definePageMeta({
    auth: false,
    description: 'Register Online',
    keywords: 'register online, register',
    title: 'Register Online'
});

onMounted(async () => {
    loadingState.isActive = true;

    await getDefaults(route.params);

    loadingState.isActive = false;
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
                        "name": "Register",
                        "item": "https://bikertraining.com/register"
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
    <div class="py-5 pt-3 row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3">
            <Form :validation-schema="schema"
                  @submit="submitRegistration">
                <FormHidden v-model="formObj['class_type']"
                            :required="false"
                            name="class_type"/>

                <FormHidden v-model="formObj['coupon_code']"
                            :required="false"
                            name="coupon_code"/>

                <FormHidden v-model="formObj['ipaddress']"
                            :required="false"
                            name="ipaddress"
                            type="hidden"/>

                <FormHidden v-model="route.params['id']"
                            :required="false"
                            name="schedule"
                            type="hidden"/>

                <h1 class="mb-3 fs-4">
                    <svg class="bi">
                        <use xlink:href="#calendar-days"/>
                    </svg>

                    Schedule Details
                </h1>

                <div class="row g-3">
                    <div v-if="formObj['class_type'] === '3wbrc'"
                         class="col-md-12 fw-bolder mt-3">
                        <div class="mb-1">{{ formObj['schedule_details']['class_type_name'] }}</div>

                        <div class="mb-1">
                            {{
                                utilClassDate(formObj['schedule_details']['date_from'], formObj['schedule_details']['date_to'])
                            }} / {{ formObj['schedule_details']['day_type_name'] }}
                        </div>

                        <div class="mb-3">Class times are Sunday 1:00 PM to 4:00 PM and Monday 7:00 AM to 3:00 PM</div>

                        <div class="mb-3">For those who are not registering for the Can-AM Spyder program, you must
                                          bring your own 3-wheel motorcycle for training purposes.
                        </div>

                        <span class="text-danger mt-3">If you are looking for the Can-AM Spyder Training</span>&nbsp;

                        <NuxtLink target="_blank"
                                  to="https://learntoride3wheel.com/webreg/production/reactapp/?book=canamregister&SC=FLBKTR01&CC=3WBU">
                            <button class="btn btn-success btn-sm px-4 gap-3"
                                    type="button">
                                Click Here
                            </button>
                        </NuxtLink>
                    </div>

                    <div v-if="formObj['class_type'] === 'brc'"
                         class="col-md-12 fw-bolder mt-3">
                        <div class="mb-1">{{ formObj['schedule_details']['class_type_name'] }}</div>

                        <div class="mb-1">
                            {{
                                utilClassDate(formObj['schedule_details']['date_from'], formObj['schedule_details']['date_to'])
                            }} / {{ formObj['schedule_details']['day_type_name'] }}
                        </div>

                        <div>Class times are from 7:00 AM to 4:00 PM each day</div>
                    </div>

                    <div v-if="formObj['class_type'] === 'src'"
                         class="col-md-12 fw-bolder mt-3">
                        <div class="mb-1">{{ formObj['schedule_details']['class_type_name'] }}</div>

                        <div class="mb-1">
                            {{
                                utilClassDate(formObj['schedule_details']['date_from'], formObj['schedule_details']['date_to'])
                            }} / {{ formObj['schedule_details']['day_type_name'] }}
                        </div>

                        <div>Class times are from 12:00 PM (Noon) to 5:30 PM</div>
                    </div>
                </div>

                <hr class="my-4">

                <h2 class="mb-3 fs-4">
                    <svg class="bi">
                        <use xlink:href="#user-plus"/>
                    </svg>

                    Student Enrollment
                </h2>

                <div class="row g-3">
                    <div class="col-md-6">
                        <FormText v-model="formObj['first_name']"
                                  :required="true"
                                  help-text="As printed on your Drivers License"
                                  label="First Name"
                                  name="first_name"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['last_name']"
                                  :required="true"
                                  help-text="As printed on your Drivers License"
                                  label="Last Name"
                                  name="last_name"/>
                    </div>

                    <div class="col-md-12">
                        <FormText v-model="formObj['address']"
                                  :required="true"
                                  label="Address"
                                  name="address"/>
                    </div>

                    <div class="col-md-5">
                        <FormText v-model="formObj['city']"
                                  :required="true"
                                  label="City"
                                  name="city"/>
                    </div>

                    <div class="col-md-4">
                        <FormSelectState v-model="formObj['state']"
                                         :required="true"
                                         label="State"
                                         name="state"/>
                    </div>

                    <div class="col-md-3">
                        <FormText v-model="formObj['zipcode']"
                                  :required="true"
                                  label="Zipcode"
                                  max-length="28"
                                  name="zipcode"
                                  type="tel"/>
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
                                  :required="true"
                                  label="Phone Number"
                                  name="phone"
                                  type="tel"/>
                    </div>

                    <div class="col-md-5">
                        <FormText v-model="formObj['dln']"
                                  :required="true"
                                  label="Drivers License Number"
                                  name="dln"/>
                    </div>

                    <div class="col-md-3">
                        <FormSelectState v-model="formObj['dls']"
                                         :required="true"
                                         country="US"
                                         label="License State of Issue"
                                         name="dls"/>
                    </div>

                    <div class="col-md-4">
                        <FormText v-model="formObj['dob']"
                                  :required="true"
                                  help-text="MM/DD/YYYY"
                                  label="Date of Birth"
                                  max-length="10"
                                  name="dob"
                                  type="tel"/>
                    </div>
                </div>

                <hr class="my-4 mt-0">

                <h3 class="mb-3 fs-4">
                    <svg class="bi">
                        <use xlink:href="#motorcycle"/>
                    </svg>

                    Optional Information
                </h3>

                <div class="row g-3">
                    <div class="col-md-6">
                        <FormSelect v-model="formObj['xpl']"
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
                        <FormTextArea v-model="formObj['comment']"
                                      :required="false"
                                      help-text="Anything we should be aware of?"
                                      label="Comments"
                                      name="comment"
                                      rows="3"/>
                    </div>

                    <div class="col-md-6 mb-3">
                        <FormSwitch v-model="formObj['can_email']"
                                    help-text="We only send on average 4 emails per year"
                                    label="Notify me about upcoming events"
                                    name="can_email"/>
                    </div>
                </div>

                <hr class="my-4 mt-0">

                <h4 class="mb-3 fs-4">
                    <svg class="bi">
                        <use xlink:href="#credit-card"/>
                    </svg>

                    Payment
                </h4>

                <div class="row g-3">
                    <div class="col-md-6">
                        <FormText v-model="formObj['credit_card_first_name']"
                                  :required="true"
                                  help-text="First name as displayed on card"
                                  label="First Name"
                                  name="credit_card_first_name"/>
                    </div>

                    <div class="col-md-6">
                        <FormText

                                v-model="formObj['credit_card_last_name']"
                                :required="true"
                                help-text="Last name as displayed on card"
                                label="Last Name"
                                name="credit_card_last_name"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['credit_card_number']"
                                  :required="true"
                                  label="Credit Card Number"
                                  max-length="16"
                                  name="credit_card_number"
                                  type="tel"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['credit_card_cvv2']"
                                  :required="true"
                                  label="CVV"
                                  max-length="4"
                                  name="credit_card_cvv2"
                                  type="tel"/>
                    </div>

                    <div class="col-md-6">
                        <FormSelect v-model="formObj['credit_card_month']"
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
                        <FormSelect v-model="formObj['credit_card_year']"
                                    :options="{
                                                '2024': '2024',
                                                '2025': '2025',
                                                '2026': '2026',
                                                '2027': '2027',
                                                '2028': '2028',
                                                '2029': '2029',
                                                '2030': '2030',
                                                '2031': '2031',
                                                '2032': '2032',
                                                '2033': '2033',
                                                '2034': '2034',
                                                '2035': '2035',
                                                '2036': '2036',
                                                '2037': '2037',
                                                '2038': '2038',
                                                '2039': '2039',
                                                '2040': '2040'
                                              }"
                                    :required="true"
                                    label="Expiration Year"
                                    name="credit_card_year"/>
                    </div>
                </div>

                <div v-if="formObj['schedule'] && !formObj['coupon_is_active']"
                     class="col-md-6 fw-bolder mt-0 mb-3">
                    <Form :validation-schema="couponSchema"
                          @submit="utilValidateCoupon">
                        <FormText v-model="formObj['coupon_code']"
                                  :required="false"
                                  label="Coupon Code"
                                  name="coupon_code"/>

                        <button class="w-100 btn btn-primary btn-sm"
                                type="submit">
                            <svg class="bi-tag">
                                <use xlink:href="#tag"/>
                            </svg>

                            Apply
                        </button>
                    </form>
                </div>

                <div class="col-md-12 fw-bolder mt-0">Total ${{ formObj['amount'] }}</div>

                <div v-if="nonFieldFormError"
                     class="text-danger my-3 fs-5 border border-danger border-2 rounded-3">
                    <span class="mx-2">{{ nonFieldFormMessage }}</span>
                </div>

                <div class="mb-3">
                    <span class="fw-bold">Protected by</span>

                    <img alt="Let's Encrypt"
                         height="50"
                         loading="lazy"
                         src="/img/le/logo.webp"
                         width="169"/>
                </div>

                <button class="w-100 btn btn-success btn-lg"
                        type="submit">
                    <svg class="bi-lock">
                        <use xlink:href="#lock"/>
                    </svg>

                    Register
                </button>
            </form>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <h5 class="mb-3 fs-4">
                <svg class="bi text-danger">
                    <use xlink:href="#triangle-exclamation"/>
                </svg>

                Notice
            </h5>

            <div class="mb-3">
                After submitting your application, you will receive an email by the next business day (or before your
                class starts) confirming your enrollment and providing all details about your specific class. If you’d
                prefer to enroll on the phone, give us a call at
                <a class="text-dark text-decoration-none"
                   v-bind:href="'tel:' + getBusinessPhone(true)">{{ getBusinessPhone(false) }}</a>.
            </div>

            <div>
                <div class="fw-bold mb-3">REFUND / CANCELLATION POLICY</div>

                <div class="mb-3">
                    When enrolling, you are purchasing a seat in the class of your choice. Once purchased, that seat is
                    set aside for only your use. Please select the date that will ensure you can attend each day for the
                    times indicated. You must attend all class/range sessions.
                </div>

                <div class="mb-3">
                    <span class="fw-bold">Cancellation:</span>
                    All fees are nonrefundable unless students call <a
                        class="text-dark text-decoration-none"
                        v-bind:href="'tel:' + getBusinessPhone(true)">{{ getBusinessPhone(false) }}</a> or email
                    <a v-bind:href="'mailto:' + getBusinessEmail()"> {{ getBusinessEmail() }}</a> 6 days prior to their
                    scheduled class to obtain a partial refund. A partial refund is full tuition minus a
                    ${{ formObj['process_amount'] }} processing fee.
                </div>

                <div class="mb-3">
                    There is a minimum of four students per class. If minimum is not met, student has option to move to
                    any future class or receive a full refund.
                </div>

                <div class="mb-3">
                    <span class="fw-bold">Postponement:</span>
                    There is no charge for postponement provided the student calls or emails at least 48 hours prior to
                    the start of their scheduled class. If less than 48 hours prior or if a student does not complete
                    the entire class, a seat in a subsequent class may be purchased.
                </div>

                <div class="mb-3">
                    <span class="fw-bold">Late Arrivals:</span>
                    Learning to ride a motorcycle requires skill progression. This progression begins with small tasks
                    and builds to larger, more complex tasks. It is critical that students arrive on time. Preferably,
                    come early! If you miss a class or range session, you will not be allowed to complete the course and
                    will have to purchase another seat in a later class.
                </div>

                <div class="mb-3" v-if="formObj['class_type'] != 'src'">
                    <span class="fw-bold">eCourse:</span>
                    The eCourse is a national requirement for motorcycle training. You will be emailed a unique link to
                    complete the eCourse before attending class.
                </div>
            </div>
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

.bi-lock {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    vertical-align: -.125em;
    overflow: visible;
}

.bi-tag {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    vertical-align: -.125em;
    overflow: visible;
}
</style>