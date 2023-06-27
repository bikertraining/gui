<script lang="ts"
        setup>
definePageMeta({ auth: false });

const { formObj, getPrices } = useClientPrice();

onMounted(() => {
    getPrices();
});

useHead({
    title: 'Basic Rider Course',
    meta: [
        { name: 'description', content: 'Basic Rider Course' },
        {
            name: 'keywords',
            content: 'basic rider course, basic rider course near me, motorcycle basic rider course near me, msf basic rider course, motorcycle basic rider course, basic motorcycle course, brc course near me, motorcycle safety foundation basic rider course, 3 wheel basic rider course near me, msf e course, online motorcycle endorsement class, intermediate motorcycle course, msf brc, basic rider course online, motorcycle license waiver course near me, msf course cost, harley davidson basic rider course, brc motorcycle course, basic ridercourse brc, basic motorcycle operator training course, motorcycle beginner course near me, brc motorcycle class, msf online course, basic riders course usmc, motorbike lessons for beginners, brc motorcycle course near me, basic motorcycle training course, dmv approved motorcycle safety course online, msf basic rider course near me, basic motorcycle course near me, brc class, team arizona basic rider course, brc class near me, basic rider course promo code, motorcycle riding lessons for beginners, basic ridercourse brc near me, basic rider course 2, riding course for motorcycle, basic motorcycle training, beginner rider course, brc motorcycle class near me, riding course motorcycle, mirep basic rider course, msf basic rider course practice test, brc online course, basic riding course near me, basic riders course motorcycle, msf basic e course, 3 wheel basic rider course, basic ridercourse updated, msf train, motorcycle safety foundation\'s msf motorcycle basic ridercourse, 7 day motorcycle course, msf course layout, basic rider, msf basic course, basic rider safe course, msf basic rider course test, motorcycle class a license, basic motorcycle safety course, brcu course near me, msf brc course, msf brc test, pa basic rider course, basic motorcycle skills, msf basic rider course skills test, msf motorcycle basic rider course, msf basic rider course exercises, motorcycle basic, msf basic rider course written test, basic rider course cost, msf online e course, motorbike basic training, dmv basic rider course, motorcycle learning class near me, safe ride motorcycle class, motorcycle rider training courses, basic rider course practice test, basic rider training course, basic riding skills, basic rider course test, msf brc written test, learn to ride motorcycle classes near me, msf brc practice test, motorcycle course for beginners, msf basic rider course 2, the motorcycle safety foundation basic ridercourse, motorcycle safety course basic rider course, basic motorcycle classes near me, basic riders course harley davidson, cheap msf course, the basic ridercourse, brc written test, basic rider safety course near me, fl basic rider course, msf basic, motorcycle safe driving course, motorcycle safe rider course, basic motorcycle operator training course near me, safety riders course, ct basic rider course, riders courses near me, basic motorcycle class, msf basic rider course cost, motorcycle basic rider course test, brcu motorcycle, three wheel basic rider course, scooter basic rider course, basic motorcycle rider course near me, motorcycle safety basic rider course, motorcycle safety course for beginners, online basic rider course, wctc basic rider course, basic riders course brc, basic rider course knowledge test, learn to ride motorcycle training, motorcycle safety foundation msf basic rider course brc, basic rider course written test, motorcycle basic training course near me, msf rider course test, motorcycle basic rider course online, bike rider class, beginner motorcycle riding course, basic motorcycle safety, basic rider course manual, msf beginner rider course, msf 3 wheel basic rider course, motorcycle test courses, intermediate motorcycle safety course, class motorcycle training, cbt motorcycle courses'
        }
    ]
});
</script>

<template>
    <div class="py-5 pt-3"
         style="min-height: calc(100vh - 270px) !important;">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Basic RiderCourse (BRCu)</h4>
            </div>

            <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4 text-start">
                    <li>This course is designed for beginning riders of all ages. The Basic RiderCourse consists of 15
                        hours of instruction including approximately 5 hours using the online self-paced eCourse and 10
                        hours of riding on the parking lot range. This course will teach you how to operate a motorcycle
                        safely, and strongly emphasizes the special skills and mental attitude required for dealing with
                        every day riding.
                    </li>

                    <li class="mt-3 fw-bold">You must be able to ride a two-wheeled bicycle to enroll in the BRC.</li>

                    <li class="mt-3">You will learn about different types of motorcycles, their controls, and how they
                        operate. The Rider Coaches, all experienced professionals, will advise you on the proper riding
                        gear to ensure comfort and protection. You will also learn how alcohol and other drugs affect
                        your ability to ride safely.
                    </li>

                    <li class="mt-3">The range is a controlled, off-street, pedestrian-free environment. Students use
                        motorcycles provided by the school to learn and practice safely and correctly the various
                        maneuvers and demanding situations encountered in street riding. Riders must pass both a written
                        test and a riding skills test in order to complete the course. Upon successful completion, you
                        will be exempt from any requirement to take the State test for your motorcycle endorsement at
                        the driver's license office.
                    </li>

                    <li class="mt-3 fw-bold">This course meets the State of Florida requirement for obtaining a
                        motorcycle endorsement on your driver’s license. All students must wear the required protective
                        gear.
                    </li>

                    <li class="mt-3 fw-bold">Important: You are purchasing a seat in the class of your choice. After you
                        select and confirm the date of the class that best fits your schedule, fees are nonrefundable.
                        You must attend all class/range sessions. If you miss a class or range session or for any reason
                        do not fully complete your class, you can purchase a seat in a subsequent class for
                        ${{ formObj['brc']['re_amount'] }}.
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