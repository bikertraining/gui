<script lang="ts"
        setup>
const { formObj, getPrices } = useClientPrice();

const route = useRoute();

definePageMeta({
    auth: false,
    description: 'Experienced Rider Course',
    keywords: 'experienced rider course, motorcycle advanced rider training, msf experienced rider course, msf advanced rider course exercises, experienced motorcycle rider course, experienced rider course near me',
    title: 'Experienced Rider Course'
});

onMounted(() => {
    getPrices();
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5 pt-3">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Experienced RiderCourse (BRCu2)</h4>
            </div>

            <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4 text-start">
                    <li>You’re good... we’ll make ya better!</li>

                    <li class="mt-3">No matter how long you have been riding, this course will make you a better and
                        safer rider.
                    </li>

                    <li class="mt-3 fw-bold">Note: This course is NOT FOR ENDORSEMENT, students must already have an
                        endorsement on their license.
                    </li>

                    <li class="mt-3">This one day course, typically held on Sundays, is for riders who already own and
                        ride a motorcycle and are interested in state-of-the-art motorcycle handling techniques or for
                        brushing up on their safe street riding skills. Increasing numbers of seasoned riders are coming
                        to the Experienced RiderCourse to fine-tune their riding and mental skills needed for survival
                        in traffic.
                    </li>

                    <li class="mt-3">You'll discuss with your peers how to balance the mental and physical aspects of
                        safe riding, managing risk, increasing visibility and optimizing lane position. The course also
                        covers protective gear, rider responsibility, motorcycle inspection and care, and the effects of
                        alcohol and other drugs on riding.
                    </li>

                    <li class="mt-3">On the range, using your own motorcycle, you will put into practice intense riding
                        activities, including the techniques of managing traction, slow speed handling, stopping
                        quickly, cornering and swerving.
                    </li>

                    <li class="mt-3"><span class="fw-bold">To qualify for participation</span>, you must have at least
                        three (3) months riding experience and have a motorcycle endorsement on your driver's license.
                    </li>

                    <li class="mt-3"><span class="fw-bold">Riders must provide a street-legal bike that passes a safety
                        inspection (T-CLOCS) and provide proof of insurance and ownership.</span> If the motorcycle is
                        not owned by the rider, a notarized, written approval from the owner to use the motorcycle in
                        the course must be provided. Additionally, handlebars should not be over 15 inches from the
                        grips to the lowest part of the seat.
                    </li>

                    <li class="mt-3 fw-bold">All students must wear the required protective gear.</li>

                    <li class="mt-3">Upon completion of the Experienced RiderCourse, a graduate may receive an insurance
                        discount from participating companies.
                    </li>

                    <li class="mt-3 fw-bold">Important: You are purchasing a seat in the class of your choice. After you
                        select and confirm the date of the class that best fits your schedule, fees are nonrefundable.
                        You must attend all class/range sessions. If you miss a class or range session or for any reason
                        do not fully complete your class, you can purchase a seat in a subsequent class for
                        ${{ formObj['erc']['re_amount'] }}.
                    </li>
                </ul>

                <div class="row text-center">
                    <NuxtLink to="/register">
                        <button class="w-50 btn btn-lg btn-outline-success"
                                type="button">
                            <svg aria-hidden="true"
                                 data-icon="user-plus"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 640 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"
                                      fill="currentColor"/>
                            </svg>

                            Sign up
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>