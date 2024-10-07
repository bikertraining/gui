<script setup lang="ts">
const {formObj, getEcourseLink} = useClientEcourse();

const {loadingState} = usePageLoading();

const route = useRoute();

const {getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'ePackage-1 eCourse',
  keywords: 'eCourse, msf ecourse, ePackage-1 eCourse',
  title: 'ePackage-1 eCourse'
});

onMounted(async () => {
  loadingState.isActive = true;

  await getEcourseLink();

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
                        "name": "Courses",
                        "item": "${getGuiUrl()}/courses"
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "ePackage-1 eCourse",
                        "item": "${getGuiUrl()}/courses/ecourse/${route.params['class_type']}"
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
      class="card mt-3">
    <div
        class="card-header fs-4 text-white bg-dark">
      MSF ePackage 1 eCourse
    </div>

    <div
        class="card-body">
      <div
          class="card-text">
        <div>
          The MSF ePackage-1 eCourse must be completed before attending your scheduled class. Clicking on the button at
          the bottom of this page will redirect you to the Motorcycle Safety Foundation website to register and begin
          the eCourse.
        </div>

        <div
            class="mt-3">
          Please follow the instructions below to register and begin the ePackage-1 eCourse.
        </div>

        <div
            class="mt-3">
          To waive the $39.99 registration fee, you MUST enroll in the online eCourse using the button below. The course
          fee will be $0.00 if you use the unique link.
        </div>

        <ul
            class="list-group list-group-numbered">
          <li
              class="list-group-item border-0">
            Enter your Student Information in the required fields.
          </li>

          <li
              class="list-group-item border-0">
            Click Enroll Student at the bottom of the page.
          </li>

          <li
              class="list-group-item border-0">
            If you have entered all required enrollment information, near the bottom of the page you will see a message
            in light green that says, "Temporary enrollee successfully added…."
          </li>

          <li
              class="list-group-item border-0">
            Click Complete Registration.
          </li>

          <li
              class="list-group-item border-0">
            Scroll down to the Waiver(s) and Indemnification(s) on the bottom half of the screen.
          </li>

          <li
              class="list-group-item border-0 fw-bold text-danger">
            IF YOU ARE ASKED TO MAKE A CREDIT CARD PAYMENT, STOP!

            <div>
              The Fee is $0.00 when you register using the link found in your email confirmation. The MSF does NOT
              provide refunds if you use your credit card instead of your enrollment link.
            </div>
          </li>

          <li
              class="list-group-item border-0">
            To complete the registration, you must read and agree to the Student Release(s) by checking the I Accept
            box. To activate that checkbox, you must first read the entire release by scrolling to the bottom of the
            inset document. If you cannot click on the 'I Accept' box, make sure you have scrolled to the end of the
            waiver (and not just the bottom of the Enrollment page).
          </li>

          <li
              class="list-group-item border-0">
            Enter your email address in both required confirmation fields and click Complete Registration.
          </li>

          <li
              class="list-group-item border-0">
            Read the information on the reservation confirmation screen and double-check the email address in the
            ‘Student Fees’ section. If you need your email address updated, please email

            <NuxtLink
                v-bind:href="'mailto:msfsupport@msf-usa.org'"
                class="text-decoration-none">
              msfsupport@msf-usa.org
            </NuxtLink>

            and include your full name, phone number, and the correct email address. Our staff will update your account
            and email you a temporary password.
            <NuxtLink
                target="_blank"
                to="https://elearning.msf-usa.org/">
              https://elearning.msf-usa.org
            </NuxtLink>
          </li>

          <li
              class="list-group-item border-0">
            IF YOU HAVE AN ACCOUNT FROM A PREVIOUS eCourse ENROLLMENT, YOU WILL NOT RECEIVE NEW LOGIN CREDENTIALS.
            Please log in at

            <NuxtLink
                target="_blank"
                to="https://elearning.msf-usa.org/">
              https://elearning.msf-usa.org
            </NuxtLink>

            with your original credentials or reset your password using the ‘Lost Password’ feature on the login page.
          </li>

          <li
              class="list-group-item border-0">
            You will receive two emails: a registration confirmation and another with your login credentials.
          </li>

          <li
              class="list-group-item border-0">
            Look for an email from ‘MSF eCourse Support Desk (via MSF) ‘MSF eCourse Server Homepage: New User Account.’
            It contains your username, a temporary password, and a link to the course login page. Check your Trash and
            Spam folders if it is not in your Inbox.
          </li>

          <li
              class="list-group-item border-0">
            On the login page, enter your username and password, click Log in.
          </li>

          <li
              class="list-group-item border-0">
            You will be prompted to change your password. Re-enter your assigned password in the ‘Current Password’
            field. Then, enter a personalized password in both ‘New Password’ fields. Click ‘Save Changes,’ then
            ‘Continue.’
          </li>

          <li
              class="list-group-item border-0">
            On the Homepage, scroll down and under My courses, click MSF ePackage 1 eCourse.
          </li>

          <li
              class="list-group-item border-0">
            Click the red Click Here button.
          </li>

          <li
              class="list-group-item border-0">
            Click Enter. A new window will open and begin loading your course.
          </li>
        </ul>

        <div
            class="fw-bold mt-2">
          The course will not advance automatically. When the audio for a page ends, use the navigation bar at the
          bottom of the screen to move forward by clicking on the blinking red forward arrow.
        </div>

        <div
            class="fw-bold">
          The course is designed to save your progress and allow you to complete it over multiple sessions.
        </div>

        <div
            class="fw-bold">
          Upon completion, you will be redirected to the course menu page (with the red “Click Here” button). Scroll
          down and click Completion Certificate. Email your completion certificate to

          <NuxtLink
              v-bind:href="'mailto:ecourse@bikertraining.com'"
              class="text-decoration-none">
            ecourse@bikertraining.com
          </NuxtLink>
        </div>

        <div
            class="mt-3">
          MSF (Motorcycle Safety Foundation) can be reached by calling

          <NuxtLink
              v-bind:href="'tel:9497273227'"
              class="text-decoration-none">
            949-727-3227 x3158
          </NuxtLink>

          <div>
            Monday – Friday 8:30 am – 5:00 pm Pacific Time
          </div>

          <div>
            Closed weekends and major holidays.
          </div>

          <div>
            OR by emailing

            <NuxtLink
                v-bind:href="'mailto:msfsupport@msf-usa.org'"
                class="text-decoration-none">
              msfsupport@msf-usa.org
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div
        class="card-footer border-0 bg-white text-center">
      <div>
        <NuxtLink
            v-if="route.params['class_type'] === 'brc'"
            :to="formObj['link_brc_e5']"
            class="btn btn-lg btn-success w-100 mb-3"
            target="_blank">
          <BootstrapIcon
              name="calendar3"/>
          Click here to begin the ePackage-1 eCourse
        </NuxtLink>

        <NuxtLink
            v-if="route.params['class_type'] === '3wbrc'"
            :to="formObj['link_3wbrc']"
            class="btn btn-lg btn-success w-100 mb-3"
            target="_blank">
          <BootstrapIcon
              name="calendar3"/>
          Click here to begin the ePackage-1 eCourse
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>