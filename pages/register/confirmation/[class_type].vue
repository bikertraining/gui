<script lang="ts"
        setup>
const { formObj, getPrices } = useClientPrice();

const route = useRoute();

const { getBusinessEmail, getBusinessPhone } = useUtils();

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
    <div class="py-5"
         style="min-height: calc(100vh - 270px) !important;">
        <h1 class="mb-3 fs-4">
            <svg class="bi">
                <use xlink:href="#motorcycle"/>
            </svg>

            Registration Confirmation
        </h1>

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
                    <svg class="bi">
                        <use xlink:href="#link"/>
                    </svg>

                    Click here to begin the eCourse
                </button>
            </NuxtLink>
        </div>

        <div v-if="route.params['class_type'] === '3wbrc'"
             class="mb-3">
            <NuxtLink to="/courses/ecourse/3wbrc">
                <button class="btn btn-success btn-lg"
                        type="submit">
                    <svg class="bi">
                        <use xlink:href="#link"/>
                    </svg>

                    Click here to begin the eCourse
                </button>
            </NuxtLink>
        </div>

        <div>
            <div class="fw-bold mb-3">REFUND / CANCELLATION POLICY</div>

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
.bi {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: -.125em;
    overflow: visible;
}
</style>