<script lang="ts"
        setup>
const { formObj, getPrices } = useClientPrice();

const route = useRoute();

definePageMeta({
    auth: false,
    description: 'Basic Rider Course',
    keywords: 'basic rider course, basic rider course near me, motorcycle basic rider course near me, msf basic rider course, motorcycle basic rider course, basic motorcycle course, brc course near me, motorcycle safety foundation basic rider course, 3 wheel basic rider course near me, msf e course, online motorcycle endorsement class, intermediate motorcycle course, msf brc, basic rider course online, motorcycle license waiver course near me, msf course cost, harley davidson basic rider course, brc motorcycle course, basic ridercourse brc, basic motorcycle operator training course, motorcycle beginner course near me, brc motorcycle class, msf online course, basic riders course usmc, motorbike lessons for beginners, brc motorcycle course near me, basic motorcycle training course, dmv approved motorcycle safety course online, msf basic rider course near me, basic motorcycle course near me, brc class, team arizona basic rider course, brc class near me, basic rider course promo code, motorcycle riding lessons for beginners, basic ridercourse brc near me, basic rider course 2, riding course for motorcycle, basic motorcycle training, beginner rider course, brc motorcycle class near me, riding course motorcycle, mirep basic rider course, msf basic rider course practice test, brc online course, basic riding course near me, basic riders course motorcycle, msf basic e course, 3 wheel basic rider course, basic ridercourse updated, msf train, motorcycle safety foundation\'s msf motorcycle basic ridercourse, 7 day motorcycle course, msf course layout, basic rider, msf basic course, basic rider safe course, msf basic rider course test, motorcycle class a license, basic motorcycle safety course, brcu course near me, msf brc course, msf brc test, pa basic rider course, basic motorcycle skills, msf basic rider course skills test, msf motorcycle basic rider course, msf basic rider course exercises, motorcycle basic, msf basic rider course written test, basic rider course cost, msf online e course, motorbike basic training, dmv basic rider course, motorcycle learning class near me, safe ride motorcycle class, motorcycle rider training courses, basic rider course practice test, basic rider training course, basic riding skills, basic rider course test, msf brc written test, learn to ride motorcycle classes near me, msf brc practice test, motorcycle course for beginners, msf basic rider course 2, the motorcycle safety foundation basic ridercourse, motorcycle safety course basic rider course, basic motorcycle classes near me, basic riders course harley davidson, cheap msf course, the basic ridercourse, brc written test, basic rider safety course near me, fl basic rider course, msf basic, motorcycle safe driving course, motorcycle safe rider course, basic motorcycle operator training course near me, safety riders course, ct basic rider course, riders courses near me, basic motorcycle class, msf basic rider course cost, motorcycle basic rider course test, brcu motorcycle, three wheel basic rider course, scooter basic rider course, basic motorcycle rider course near me, motorcycle safety basic rider course, motorcycle safety course for beginners, online basic rider course, wctc basic rider course, basic riders course brc, basic rider course knowledge test, learn to ride motorcycle training, motorcycle safety foundation msf basic rider course brc, basic rider course written test, motorcycle basic training course near me, msf rider course test, motorcycle basic rider course online, bike rider class, beginner motorcycle riding course, basic motorcycle safety, basic rider course manual, msf beginner rider course, msf 3 wheel basic rider course, motorcycle test courses, intermediate motorcycle safety course, class motorcycle training, cbt motorcycle courses',
    title: 'Basic Rider Course'
});

onMounted(async () => {
    await getPrices();
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
                <h1 class="my-0 fw-normal fs-4">Basic RiderCourse (BRCu)</h1>
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
                    <NuxtLink to="/schedule/brc">
                        <button class="w-50 btn btn-lg btn-outline-success"
                                type="button">
                            <svg class="bi">
                                <use xlink:href="#user-plus"/>
                            </svg>

                            Schedule
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bi {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    vertical-align: -.125em;
    overflow: visible;
}

.card {
    border-color: #212529 !important;
}

.card-header {
    background-color: #212529;
    color: #FFFFFF;
}
</style>