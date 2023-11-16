<script lang="ts"
        setup>
import { object, string } from "yup";

const {
    formObj,
    getIpaddress,
    getPrice,
    nonFieldFormError,
    nonFieldFormMessage,
    submitPayment,
    utilValidateCoupon,
} = useClientPayment();

const { loadingState } = usePageLoading();

const couponSchema = object({
    coupon_code: string().required()
});

const route = useRoute();

const schema = object({
    address: string().required(),
    city: string().required(),
    class_type: string().required(),
    coupon_code: string(),
    credit_card_cvv2: string().required().min(3).max(4),
    credit_card_first_name: string().required(),
    credit_card_last_name: string().required(),
    credit_card_month: string().required().min(1).max(2),
    credit_card_number: string().required().min(15).max(16),
    credit_card_year: string().required().length(4),
    email: string().required().email(),
    first_name: string().required(),
    ipaddress: string(),
    last_name: string().required(),
    phone: string().required(),
    state: string().required(),
    zipcode: string().required()
});

const { getBusinessEmail, getBusinessPhone } = useUtils();

definePageMeta({
    auth: false,
    description: 'Pay Online',
    keywords: 'payment, pay online',
    title: 'Pay Online'
});

onMounted(async () => {
    loadingState.isActive = true;

    await getIpaddress();

    await getPrice(route.params['class_type']);

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
                        "name": "Pay Online",
                        "item": "https://bikertraining.com/payment"
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
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <Form :validation-schema="schema"
                  @submit="submitPayment">
                <FormHidden v-model="formObj['coupon_code']"
                            :required="false"
                            name="coupon_code"
                            type="hidden"/>

                <FormHidden v-model="formObj['class_type']"
                            :required="false"
                            name="class_type"/>

                <FormHidden v-model="formObj['ipaddress']"
                            :required="false"
                            name="ipaddress"
                            type="hidden"/>

                <h1 class="mb-3 fs-4">
                    <svg class="bi">
                        <use xlink:href="#credit-card"/>
                    </svg>

                    Payment
                </h1>

                <div class="row g-3">
                    <div class="col-md-6">
                        <FormText v-model="formObj['credit_card_first_name']"
                                  :required="true"
                                  help-text="First name as displayed on card"
                                  label="First Name"
                                  name="credit_card_first_name"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['credit_card_last_name']"
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
                                                '2023': '2023',
                                                '2024': '2024',
                                                '2025': '2025',
                                                '2026': '2026',
                                                '2027': '2027',
                                                '2028': '2028',
                                                '2029': '2029',
                                                '2030': '2030',
                                                '2031': '2031',
                                                '2032': '2032'
                                              }"
                                    :required="true"
                                    label="Expiration Year"
                                    name="credit_card_year"/>
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

                    <h2 class="mb-3 fs-4">
                        <svg class="bi">
                            <use xlink:href="#user-plus"/>
                        </svg>

                        Student Information
                    </h2>

                    <div class="col-md-6">
                        <FormText v-model="formObj['first_name']"
                                  :required="true"
                                  help-text="Student's first name as printed on Drivers License"
                                  label="First Name"
                                  name="first_name"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['last_name']"
                                  :required="true"
                                  help-text="Student's last name as printed on Drivers License"
                                  label="Last Name"
                                  name="last_name"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['email']"
                                  :required="true"
                                  help-text="You will receive an emailed receipt"
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
                </div>

                <client-only>
                    <div v-if="!formObj['coupon_is_active']"
                         class="col-md-6 fw-bolder mt-0 mb-3">
                        <Form :validation-schema="couponSchema"
                              @submit="utilValidateCoupon">
                            <FormHidden v-model="formObj['class_type']"
                                        :required="false"
                                        name="class_type"/>

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
                </client-only>

                <div class="col-md-4 fw-bolder mt-0">Total ${{ formObj['amount'] }}</div>

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

                    Submit Payment
                </button>
            </form>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="mb-3">
                <img alt="Pensacola Harley-Davidson"
                     class="d-block img-fluid mt-5"
                     height="97"
                     loading="lazy"
                     src="/img/phd/logo.webp"
                     width="400"/>
            </div>

            <div class="mb-3">
                You can use this form to pay online for your class or give us a call at
                <a class="text-dark text-decoration-none"
                   v-bind:href="'tel:' + getBusinessPhone(true)">{{ getBusinessPhone(false) }}</a>.
            </div>

            <div>Please ensure the First and Last name is that of the student who is enrolled.</div>

            <hr class="w-100 mx-auto my-4 border-1">

            <h3 class="mb-3 fs-4">
                <svg class="bi text-danger">
                    <use xlink:href="#triangle-exclamation"/>
                </svg>

                Notice
            </h3>

            <div>
                <div class="fw-bold mb-3">REFUND / CANCELLATION POLICY</div>

                <div class="mb-3">
                    When enrolling, you are purchasing a seat in the class of your choice. Once purchased, that seat is
                    set aside for only your use. Please select the date that will ensure you can attend each day for the
                    times indicated. You must attend all class/range sessions.
                </div>

                <div class="mb-3">
                    <span class="fw-bold">Cancellation:</span>
                    All fees are nonrefundable unless students call
                    <a class="text-dark text-decoration-none"
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

                <div v-if="formObj['class_type'] != 'src'" class="mb-3">
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