<script setup lang="ts">
import {object, string} from "yup";
import {Form} from "vee-validate";

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

const {loadingState} = usePageLoading();

const couponSchema = object({
  coupon_code: string().required()
});

const route = useRoute();

const schema = object({
  address: string().required(),
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

const {getBusinessEmail, getBusinessPhone, getGuiUrl} = useUtils();

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
                        "item": "${getGuiUrl()}"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Register",
                        "item": "${getGuiUrl()}/register"
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
  <div
      class="row">
    <div
        class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3 mt-3">
      <h1
          class="fs-4">
        <BootstrapIcon
            name="calendar3"/>
        Schedule Details
      </h1>

      <div
          class="fw-bold">
        {{ formObj['schedule_details']['class_type_name'] }}
      </div>

      <div
          class="fw-bold mt-1">
        {{ utilClassDate(formObj['schedule_details']['date_from'], formObj['schedule_details']['date_to']) }} /
        {{ formObj['schedule_details']['day_type_name'] }}
      </div>

      <div
          v-if="formObj['class_type'] === '3wbrc'">
        <div
            class="fw-bold mt-1">
          Class times are Sunday 1:00 PM to 4:00 PM and Monday 7:00 AM to 4:00 PM
        </div>

        <div
            class="text-danger fw-bold mt-3">
          You *must* bring your own 3-wheel motorcycle for training purposes and show proof of insurance.
        </div>

        <div
            class="fw-bold mt-3">
          If you are looking for the Can-AM Spyder / Ryker Training

          <NuxtLink
              class="btn btn-sm btn-success"
              target="_blank"
              to="https://learntoride3wheel.com/webreg/production/reactapp/?book=canamregister&SC=FLBKTR01&CC=3WBU">
            Click Here
          </NuxtLink>
        </div>
      </div>

      <div
          v-if="formObj['class_type'] === 'brc'">
        <div
            class="fw-bold mt-1">
          Class times are from 7:00 AM to 4:00 PM each day
        </div>
      </div>

      <div
          v-if="formObj['class_type'] === 'src'">
        <div
            class="fw-bold mt-1">
          Class times are from 12:00 PM (Noon) to 5:30 PM
        </div>

        <div
            class="fw-bold mt-2 text-danger">
          You *must* bring your own motorcycle for training purposes and show proof of insurance.

          <div
              class="mt-3">
            You *must* have the motorcycle endorsement on your drivers
            license.
          </div>
        </div>
      </div>

      <hr/>

      <Form
          @submit="submitRegistration"
          :validation-schema="schema">
        <FormHidden
            v-model="formObj['class_type']"
            :required="false"
            name="class_type"/>

        <FormHidden
            v-model="formObj['coupon_code']"
            :required="false"
            name="coupon_code"/>

        <FormHidden
            v-model="route.params['id']"
            :required="false"
            name="schedule"
            type="hidden"/>

        <h2
            class="fs-4 mt-3 mb-3">
          <BootstrapIcon
              name="person-plus-fill"/>
          Student Enrollment
        </h2>

        <div
            class="row">
          <div
              class="col-md-6">
            <FormText
                v-model="formObj['first_name']"
                :required="true"
                help-text="As printed on your Drivers License"
                label="First Name"
                name="first_name"/>
          </div>

          <div
              class="col-md-6">
            <FormText
                v-model="formObj['last_name']"
                :required="true"
                help-text="As printed on your Drivers License"
                label="Last Name"
                name="last_name"/>
          </div>

          <div
              class="col-md-12">
            <FormText
                v-model="formObj['address']"
                :required="true"
                label="Address"
                name="address"/>
          </div>

          <div
              class="col-md-5">
            <FormText
                v-model="formObj['city']"
                :required="true"
                label="City"
                name="city"/>
          </div>

          <div
              class="col-md-4">
            <FormSelectState
                v-model="formObj['state']"
                :required="true"
                label="State"
                name="state"/>
          </div>

          <div
              class="col-md-3">
            <FormText
                v-model="formObj['zipcode']"
                :required="true"
                label="Zipcode"
                max-length="28"
                name="zipcode"/>
          </div>

          <div
              class="col-md-6">
            <FormText
                v-model="formObj['email']"
                :required="true"
                label="Email"
                name="email"
                type="email"/>
          </div>

          <div
              class="col-md-6">
            <FormText
                v-model="formObj['phone']"
                :required="true"
                label="Phone Number"
                name="phone"
                type="tel"/>
          </div>

          <div
              class="col-md-5">
            <FormText
                v-model="formObj['dln']"
                :required="true"
                label="Drivers License Number"
                name="dln"/>
          </div>

          <div
              class="col-md-3">
            <FormSelectState
                v-model="formObj['dls']"
                :required="true"
                country="US"
                label="License State of Issue"
                name="dls"/>
          </div>

          <div
              class="col-md-4">
            <FormText
                v-model="formObj['dob']"
                :required="true"
                help-text="MM/DD/YYYY"
                label="Date of Birth"
                max-length="10"
                name="dob"/>
          </div>
        </div>

        <hr/>

        <div
            class="row">
          <h2
              class="fs-4 mb-3">
            <BootstrapIcon
                name="bicycle"/>
            Optional Information
          </h2>

          <div
              class="col-md-6">
            <FormSelect
                v-model="formObj['xpl']"
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

          <div
              class="col-md-12">
            <FormTextArea
                v-model="formObj['comment']"
                :required="false"
                help-text="Anything we should be aware of?"
                label="Comments"
                name="comment"
                rows="3"/>
          </div>
        </div>

        <hr/>

        <div
            class="row">
          <h2
              class="fs-4 mb-3">
            <BootstrapIcon
                name="credit-card"/>
            Payment
          </h2>

          <div
              class="col-md-6">
            <FormText
                v-model="formObj['credit_card_first_name']"
                :required="true"
                help-text="First name as displayed on card"
                label="First Name"
                name="credit_card_first_name"/>
          </div>

          <div
              class="col-md-6">
            <FormText
                v-model="formObj['credit_card_last_name']"
                :required="true"
                help-text="Last name as displayed on card"
                label="Last Name"
                name="credit_card_last_name"/>
          </div>

          <div
              class="col-md-6">
            <FormText
                v-model="formObj['credit_card_number']"
                :required="true"
                label="Credit Card Number"
                max-length="16"
                name="credit_card_number"/>
          </div>

          <div
              class="col-md-6">
            <FormText
                v-model="formObj['credit_card_cvv2']"
                :required="true"
                label="CVV"
                max-length="4"
                name="credit_card_cvv2"/>
          </div>

          <div
              class="col-md-6">
            <FormSelect
                v-model="formObj['credit_card_month']"
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

          <div
              class="col-md-6">
            <FormSelect
                v-model="formObj['credit_card_year']"
                :options="{
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
                  '2040': '2040',
                  '2041': '2041'
                }"
                :required="true"
                label="Expiration Year"
                name="credit_card_year"/>
          </div>
        </div>

        <div
            class="row">
          <Form :validation-schema="couponSchema"
                @submit="utilValidateCoupon">
            <div
                class="col-md-6">
              <FormText
                  v-model="formObj['coupon_code']"
                  :required="false"
                  label="Coupon Code"
                  name="coupon_code"/>

              <button
                  class="w-100 btn btn-primary"
                  type="submit">
                <BootstrapIcon
                    name="tag-fill"/>
                Apply
              </button>
            </div>
          </Form>
        </div>

        <div
            v-if="nonFieldFormError"
            class="text-danger my-3 fs-5 rounded-3 border border-2 border-danger">
          <span
              class="mx-2">
            {{ nonFieldFormMessage }}
          </span>
        </div>

        <div
            class="fw-bold mt-3">
          Total ${{ formObj['amount'] }}
        </div>

        <div>
          <span
              class="fw-bold">
            Protected by
          </span>

          <img
              alt="Protected by Let's Encrypt"
              class="mt-3"
              height="50"
              src="/img/le/logo.webp"
              width="169"/>
        </div>

        <button
            class="w-100 btn btn-success btn-lg"
            type="submit">
          <BootstrapIcon
              name="file-lock2-fill"/>
          Register
        </button>
      </Form>
    </div>

    <div
        class="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-3 mt-3">
      <h5
          class="fs-4">
        <BootstrapIcon
            class="text-danger"
            name="exclamation-triangle-fill"/>
        Notice
      </h5>

      <div>
        After submitting your application, you will receive an email by the next business day (or before your
        class starts) confirming your enrollment and providing all details about your specific class. If you’d
        prefer to enroll on the phone, give us a call at
        <NuxtLink
            v-bind:href="'tel:' + getBusinessPhone(true)"
            class="text-decoration-none">
          {{ getBusinessPhone(false) }}
        </NuxtLink>
      </div>

      <div
          class="fw-bold mt-3">
        REFUND / CANCELLATION POLICY
      </div>

      <div
          class="mt-2">
        When enrolling, you are purchasing a seat in the class of your choice. Once purchased, that seat is
        set aside for only your use. Please select the date that will ensure you can attend each day for the
        times indicated. You must attend all class/range sessions.
      </div>

      <div
          class="mt-2">
        <span
            class="fw-bold">
          Cancellation:
        </span>

        All fees are nonrefundable unless students call

        <NuxtLink
            v-bind:href="'tel:' + getBusinessPhone(true)"
            class="text-decoration-none">
          {{ getBusinessPhone(false) }}
        </NuxtLink>

        or email

        <NuxtLink
            v-bind:href="'mailto:' + getBusinessEmail(true)"
            class="text-decoration-none">
          {{ getBusinessEmail(false) }}
        </NuxtLink>

        6 days prior to their scheduled class to obtain a partial refund. A partial refund is full tuition minus a
        ${{ formObj['process_amount'] }} processing fee.
      </div>

      <div
          class="mt-2">
        There is a minimum of four students per class. If minimum is not met, student will have the option to move to
        any future class or receive a full refund.
      </div>

      <div
          class="mt-2">
        <span
            class="fw-bold">
          Postponement:
        </span>

        There is no charge for postponement provided the student calls or emails at least 48 hours prior to the start of
        their scheduled class. If less than 48 hours prior or if a student does not complete the entire class, a seat in
        a subsequent class may be purchased.
      </div>

      <div
          class="mt-2">
        <span
            class="fw-bold">
          Late Arrivals:
        </span>

        Learning to ride a motorcycle requires skill progression. This progression begins with small tasks and builds to
        larger, more complex tasks. It is critical that students arrive on time. Preferably, come early! If you miss a
        class or range session, you will not be allowed to complete the course and will have to purchase another seat in
        a later class.
      </div>

      <div
          v-if="formObj['class_type'] != 'src'"
          class="mt-2">
        <span
            class="fw-bold">
          eCourse:
        </span>

        The eCourse is a national requirement for motorcycle training. You will be emailed a unique link to complete the
        eCourse before attending class.
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>