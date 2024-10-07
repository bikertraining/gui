<script setup lang="ts">
const {formObj, getPrices} = useClientPrice();

const route = useRoute();

const {getBusinessEmail, getBusinessPhone} = useUtils();

definePageMeta({
  auth: false,
  description: 'Registration Confirmation',
  keywords: 'register confirmation, confirmation',
  title: 'Registration Confirmation'
});

onMounted(async () => {
  await getPrices();
});

useHead({
  title: `${route.meta['title']}`
});
</script>

<template>
  <h1
      class="fs-4 mt-3">
    <BootstrapIcon
        class="fs-3"
        name="bicycle"/>
    Registration Confirmation
  </h1>

  <div
      class="mt-3">
    Thank you for registering for one of our motorcycle courses.
  </div>

  <div
      class="mt-3">
    Soon you will receive an email confirming your registration. The confirmation email will contain all the information
    you need to know to come prepared for class.
  </div>

  <div
      class="mt-3">
    If for some reason you do not receive the email within 24 hours please call us at

    <NuxtLink
        v-bind:href="'tel:' + getBusinessPhone(true)"
        class="text-decoration-none">
      {{ getBusinessPhone(false) }}
    </NuxtLink>
  </div>

  <div
      v-if="route.params['class_type'] !== 'src'"
      class="mt-3">
    Please complete the ePackage-1 eCourse prior to the first day of class. Please check your email confirmation for a
    unique link. You can also use the button below to begin the registration process for the ePackage-1 eCourse.
  </div>

  <div
      v-if="route.params['class_type'] === '3wbrc'"
      class="mt-3">
    <NuxtLink
        to="/courses/ecourse/3wbrc"
        class="btn btn-lg btn-success mb-3">
      <BootstrapIcon
          name="link-45deg"/>
      Click here to begin the ePackage-1 eCourse
    </NuxtLink>
  </div>

  <div
      v-if="route.params['class_type'] === 'brc'"
      class="mt-3">
    <NuxtLink
        to="/courses/ecourse/brc"
        class="btn btn-lg btn-success mb-3">
      <BootstrapIcon
          name="link-45deg"/>
      Click here to begin the ePackage-1 eCourse
    </NuxtLink>
  </div>

  <div
      class="fw-bold mt-1">
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

    <span
        v-if="route.params['class_type'] === '3wbrc'">
      ${{ formObj['3wbrc']['process_amount'].slice(0, -3) }}
    </span>

    <span
        v-if="route.params['class_type'] === 'brc'">
      ${{ formObj['brc']['process_amount'].slice(0, -3) }}
    </span>

    <span
        v-if="route.params['class_type'] === 'src'">
      ${{ formObj['src']['process_amount'].slice(0, -3) }}
    </span>

    processing fee.
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
</template>

<style scoped>

</style>