<script lang="ts"
        setup>
definePageMeta({ auth: false });

const { formObj, getPrices } = useClientPrice();

const { getBusinessEmail, getBusinessPhone } = useUtils();

const route = useRoute();

onMounted(() => {
    getPrices();
});

useHead({
    title: 'Registration Confirmation',
    meta: [
        { name: 'description', content: 'Registration Confirmation' },
        {
            name: 'keywords',
            content: 'register confirmation'
        }
    ]
});
</script>

<template>
    <div class="py-5"
         style="min-height: calc(100vh - 270px) !important;">
        <h4 class="mb-3">
            <svg aria-hidden="true"
                 class="text-dark me-1"
                 data-icon="motorcycle"
                 data-prefix="fa-solid"
                 focusable="false"
                 role="img"
                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                 viewBox="0 0 640 512"
                 xmlns="http://www.w3.org/2000/svg">
                <path class=""
                      d="M342.5 32C357.2 32 370.7 40.05 377.6 52.98L391.7 78.93L439.1 39.42C444.9 34.62 452.1 32 459.6 32H480C497.7 32 512 46.33 512 64V96C512 113.7 497.7 128 480 128H418.2L473.3 229.1C485.5 226.1 498.5 224 512 224C582.7 224 640 281.3 640 352C640 422.7 582.7 480 512 480C441.3 480 384 422.7 384 352C384 311.1 402.4 276.3 431.1 252.8L415.7 224.2C376.1 253.4 352 299.8 352 352C352 362.1 353.1 373.7 355.2 384H284.8C286.9 373.7 287.1 362.1 287.1 352C287.1 263.6 216.4 192 127.1 192H31.1V160C31.1 142.3 46.33 128 63.1 128H165.5C182.5 128 198.7 134.7 210.7 146.7L255.1 192L354.1 110.3L337.7 80H279.1C266.7 80 255.1 69.25 255.1 56C255.1 42.75 266.7 32 279.1 32L342.5 32zM448 352C448 387.3 476.7 416 512 416C547.3 416 576 387.3 576 352C576 316.7 547.3 288 512 288C509.6 288 507.2 288.1 504.9 288.4L533.1 340.6C539.4 352.2 535.1 366.8 523.4 373.1C511.8 379.4 497.2 375.1 490.9 363.4L462.7 311.2C453.5 322.3 448 336.5 448 352V352zM253.8 376C242.5 435.2 190.5 480 128 480C57.31 480 0 422.7 0 352C0 281.3 57.31 224 128 224C190.5 224 242.5 268.8 253.8 328H187.3C177.9 304.5 154.9 288 128 288C92.65 288 64 316.7 64 352C64 387.3 92.65 416 128 416C154.9 416 177.9 399.5 187.3 376H253.8zM96 352C96 334.3 110.3 320 128 320C145.7 320 160 334.3 160 352C160 369.7 145.7 384 128 384C110.3 384 96 369.7 96 352z"
                      fill="currentColor"/>
            </svg>

            Registration Confirmation
        </h4>

        <div class="mb-3">Thank you for registering for one of our motorcycle courses.</div>

        <div class="mb-3">Soon you will receive an email confirming your registration. The confirmation email will
            contain all the information you need to know to come prepared for class.
        </div>

        <div class="mb-3">If for some reason you do not receive the email within 24 hours please call us at
            <a class="text-dark text-decoration-none"
               v-bind:href="'tel:' + getBusinessPhone(true)">{{ getBusinessPhone(false) }}</a>
        </div>

        <div v-if="route.params['class_type'] !== 'erc'"
             class="mb-3">Please complete the eCourse prior to the first day of class. Please check your email
            confirmation for a unique link. You can also use the button below to begin the eCourse.
        </div>

        <div v-if="route.params['class_type'] === 'brc'"
             class="mb-3">
            <NuxtLink to="/courses/ecourse/brc">
                <button class="btn btn-success btn-lg"
                        type="submit">
                    Click here to begin the eCourse
                </button>
            </NuxtLink>
        </div>

        <div v-if="route.params['class_type'] === '3wbrc'"
             class="mb-3">
            <NuxtLink to="/courses/ecourse/3wbrc">
                <button class="btn btn-success btn-lg"
                        type="submit">
                    Click here to begin the eCourse
                </button>
            </NuxtLink>
        </div>

        <div>
            <h6 class="mb-3 fw-bold">REFUND/CANCELLATION POLICY</h6>

            <div class="mb-3">When enrolling, you are purchasing a seat in the class of your choice. Once purchased,
                that seat is set aside for only your use. Please select the date that will ensure you can attend each
                day for the times indicated. You must attend all class/range sessions.
            </div>

            <div class="mb-3"><span class="fw-bold">Cancellation:</span> All fees are nonrefundable unless students call
                <a class="text-dark text-decoration-none"
                   v-bind:href="'tel:' + getBusinessPhone(true)"> {{ getBusinessPhone(false) }}</a> or email
                <a v-bind:href="'mailto:' + getBusinessEmail()">{{ getBusinessEmail() }}</a> 6 days prior to their
                scheduled class to obtain a partial refund. A partial refund is full tuition minus a
                <span v-if="route.params['class_type'] === 'brc'">
                    ${{ formObj['brc']['process_amount'].slice(0, -3) }}
                </span>

                <span v-if="route.params['class_type'] === 'erc'">
                    ${{ formObj['erc']['process_amount'].slice(0, -3) }}
                </span>

                <span v-if="route.params['class_type'] === '3wbrc'">
                    ${{ formObj['3wbrc']['process_amount'].slice(0, -3) }}
                </span> processing fee.
            </div>

            <div class="mb-3">There is a minimum of four students per class. If minimum is not met, student has option
                to move to any future class or receive a full refund.
            </div>

            <div class="mb-3"><span class="fw-bold">Postponement:</span> There is no charge for postponement provided
                the student calls or emails at least 48 hours prior to the start of their scheduled class. If less than
                48 hours prior or if a student does not complete the entire class, a seat in a subsequent class may be
                purchased for <span v-if="route.params['class_type'] === 'brc'">
                    ${{ formObj['brc']['re_amount'].slice(0, -3) }}
                </span>

                <span v-if="route.params['class_type'] === 'erc'">
                    ${{ formObj['erc']['re_amount'].slice(0, -3) }}
                </span>

                <span v-if="route.params['class_type'] === '3wbrc'">
                    ${{ formObj['3wbrc']['re_amount'].slice(0, -3) }}
                </span>.
            </div>

            <div class="mb-3"><span class="fw-bold">Late Arrivals:</span> Learning to ride a motorcycle requires skill
                progression. This progression begins with small tasks and builds to larger, more complex tasks. It is
                critical that students arrive on time. Preferably, come early! If you miss a class or range session, you
                will not be allowed to complete the course and will have to purchase another seat in a later class.
            </div>

            <div v-if="route.params['class_type'] !== 'erc'"
                 class="mb-3"><span class="fw-bold">eCourse:</span> &nbsp;The eCourse is a national requirement for
                motorcycle training. You will be emailed a unique link to complete the eCourse before attending class.
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>