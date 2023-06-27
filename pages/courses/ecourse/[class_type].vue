<script lang="ts"
        setup>
definePageMeta({ auth: false });

const { formObj, getEcourseLink } = useClientEcourse();

const route = useRoute();

onMounted(() => {
    getEcourseLink();
});

useHead({
    title: 'eCourse',
    meta: [
        { name: 'description', content: 'eCourse' },
        {
            name: 'keywords',
            content: 'eCourse'
        }
    ]
});
</script>

<template>
    <div class="py-5 pt-3"
         style="min-height: calc(100vh - 270px) !important;">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">MSF eCourse</h4>
            </div>

            <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4 text-start">
                    <li class="mb-3">
                        The MSF eCourse must be completed before attending your scheduled class. Clicking on the button
                        at the bottom of this page will redirect you to the Motorcycle Safety Foundation website to
                        register and begin the eCourse.
                    </li>

                    <li class="mb-3">Please follow the instructions below to register and begin the eCourse.</li>

                    <li class="fw-bold">To waive the $39.99 registration fee, you MUST enroll in the online eCourse
                        using the button below. The course fee will be $0.00 if you use the unique link.
                    </li>

                    <li class="mt-3">
                        <ol class="list-group-numbered list-group-flush d-grid gap-3">
                            <li class="list-group-item">Enter your Student Information in the required fields.</li>

                            <li class="list-group-item">Click Enroll Student at the bottom of the page.</li>

                            <li class="list-group-item">If you have entered all required enrollment information, near
                                the bottom of the page you will see a message in light green that says, "Temporary
                                enrollee successfully added…."
                            </li>

                            <li class="list-group-item">Click Complete Registration.</li>

                            <li class="list-group-item">Scroll down to the Waiver(s) and Indemnification(s) on the
                                bottom half of the screen.

                                <div>
                                    <span class="text-danger fw-bold">IF YOU ARE ASKED TO MAKE A CREDIT CARD PAYMENT, STOP!</span>
                                </div>

                                <div>You did not enroll using your unique link. A payment page only appears when there
                                    is a remaining balance due. Please Copy and Paste the unique link into your browser
                                    and re-enter your Student Information. The Fee is $0.00 when you register using your
                                    link. The MSF does NOT provide refunds if you use your credit card instead of your
                                    enrollment link.
                                </div>
                            </li>

                            <li class="list-group-item">To complete the registration, you must read and agree to the
                                Student Release(s) by checking the I Accept box. To activate that checkbox, you must
                                first read the entire release by scrolling to the bottom of the inset document. If you
                                cannot click on the 'I Accept' box, make sure you have scrolled to the end of the waiver
                                (and not just the bottom of the Enrollment page).
                            </li>

                            <li class="list-group-item">Enter your email address in both required confirmation fields
                                and click Complete Registration.
                            </li>

                            <li class="list-group-item">On your enrollment confirmation page, scroll down until you find
                                your username, your eight-character password, and the eCourse login site
                                <NuxtLink target="_blank"
                                          to="https://elearning.msf-usa.org">https://elearning.msf-usa.org
                                </NuxtLink>
                                . Write down your login information or print this page. Click the link to go to the MSF
                                eCourse Server Login page. If you closed your confirmation page without writing down
                                your password, look for an email from noreply-res@msf-usa.org. Check your Trash and Spam
                                folders if it is not in your inbox.
                            </li>

                            <li class="list-group-item">On the login page, enter your username and password (make sure
                                all letters are lowercase), click Log in.
                            </li>

                            <li class="list-group-item">On the Homepage, scroll down and under My courses, click MSF
                                Basic eCourse.
                            </li>

                            <li class="list-group-item">Click the <span class="text-danger">red</span> Click Here
                                button.
                            </li>

                            <li class="list-group-item">Click Enter. A new window will open and begin loading your
                                course.
                            </li>
                        </ol>
                    </li>

                    <li class="mt-3 fw-bold">The course will not advance automatically. When the audio for a page ends,
                        use the navigation bar at the bottom of the screen to move forward by clicking on the blinking
                        red forward arrow.
                    </li>

                    <li class="mt-3 fw-bold">The course is designed to save your progress and allow you to complete it
                        over multiple sessions.
                    </li>

                    <li class="mt-3 fw-bold">Upon completion, you will be redirected to the course menu page (with the
                        red “Click Here” button). Scroll down and click Completion Certificate. Email your completion
                        certificate to <a class="text-dark text-decoration-none"
                                          v-bind:href="'mailto:ecourse@bikertraining.com'">ecourse@bikertraining.com</a>
                    </li>

                    <li class="mt-3">MSF (Motorcycle Safety Foundation) can also be reached by calling
                        <a class="text-dark text-decoration-none"
                           v-bind:href="'tel:9497273227'">949-727-3227 x3158</a></li>
                </ul>

                <NuxtLink v-if="route.params['class_type'] === 'brc'"
                          :to="formObj['link_brc_e5']"
                          target="_blank">
                    <button class="w-100 btn btn-success btn-lg"
                            type="submit">
                        Click here to begin the eCourse
                    </button>
                </NuxtLink>

                <NuxtLink v-if="route.params['class_type'] === '3wbrc'"
                          :to="formObj['link_3wbrc']"
                          target="_blank">
                    <button class="w-100 btn btn-success btn-lg"
                            type="submit">
                        Click here to begin the eCourse
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>