<script lang="ts"
        setup>
const route = useRoute();

const { getBusinessPhone } = useUtils();

definePageMeta({
    auth: false,
    description: 'Remedial Motorcycle Training',
    keywords: 'remedial motorcycle training, motorcycle, training, remedial',
    title: 'Remedial Motorcycle Training'
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5 pt-3"
         style="min-height: calc(100vh - 270px) !important;">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Kickstart Course</h4>
            </div>

            <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4 text-start">
                    <li>The KickStart Course is for students that have not reached a level of comfort that will enable
                        them to continue with the course. True novice riders may find the slower pace helpful when
                        learning the initial control skills and gain greater comfort and familiarity with the
                        motorcycle. It is a 2-3 hour, first-touch experience with a motorcycle and not designed to teach
                        a person to ride. Also embedded in the experience is a self-assessment component to ensure a
                        person is aware of the risks and requirements for being a good, safe and responsible rider.
                    </li>

                    <li class="mt-3 fw-bold">Note: This course is NOT FOR ENDORSEMENT</li>

                    <li class="mt-3">The KickStart Course can be given just about any time during the week and on most
                        weekends.
                    </li>

                    <li class="mt-3">Novice riders that complete this course find they are quite comfortable with the
                        motorcycle and better prepared for the BRC.
                    </li>

                    <li class="mt-3 fw-bold">This course is only available to those who have taken the BRC and were not
                        comfortable enough to continue.
                    </li>
                </ul>

                <div class="row">
                    <div class="text-center">
                        <a class="text-decoration-none"
                           v-bind:href="'tel:' + getBusinessPhone(true)">
                            <button class="w-50 btn btn-lg btn-outline-success"
                                    type="button">
                                <svg aria-hidden="true"
                                     data-icon="phone"
                                     data-prefix="fa-solid"
                                     focusable="false"
                                     role="img"
                                     style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                     viewBox="0 0 512 512"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class=""
                                          d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                                          fill="currentColor"/>
                                </svg>

                                Call us at {{ getBusinessPhone(false) }}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>