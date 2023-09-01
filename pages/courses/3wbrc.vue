<script lang="ts"
        setup>
const { formObj, getPrices } = useClientPrice();

const route = useRoute();

definePageMeta({
    auth: false,
    description: 'Three-Wheel Basic Rider Course',
    keywords: '3 wheel, three wheel motorcycle class, 3 wheel motorcycle class, 3 wheel car, three wheel car, three wheel, yamaha 3 wheeler, honda three wheeler, polaris 3 wheeler, t rex 3 wheeler, vanderhall 3 wheel, spyder 3 wheeler, 3 wheel trike, slingshot 3 wheeler, harley 3 wheeler, 3 wheel car price, yamaha three wheeler, 3 wheel car for sale, three wheel spyder car, harley davidson three wheeler, 3 wheel spyder car, three wheel trike, vanderhall 3 wheel car, spider 3 wheels, polaris three wheeler, used 3 wheelers for sale near me, spyder three wheeler, bmw 3 wheeler, tri wheel car, 3 wheel can am, tvs three wheeler sale, three wheel for sale, harley three wheeler, three wheel car price, old 3 wheel car, slingshot three wheeler, slingshot 3 wheel car, t rex 3 wheeler for sale, 3 wheel drive, 3 wheel vanderhall, harley davidson 3 wheeler price, bmw three wheeler, t rex three wheeler, 3 wheel car vanderhall, small 3 wheel car, new three wheeler, 3 wheel basic rider course near me, vanderhall three wheeler, new 3 wheel car, carver 3 wheeler, t rex 3 wheeler price, spyder car 3 wheel price, venice 3 wheeler, three wheel car for sale, yamaha 3 wheeler models, 3 wheel harley davidson, 3 wheeler price, a three wheeler, ryker 3 wheeler, polaris 3 wheel car, tvs three wheel, vanderhall 3 wheeler price, slingshot 3 wheeler price, piaggio three wheeler for sale, vanderhall 3 wheel car price, tvs three wheeler for sale, tuk tuk 3 wheeler, 3 wheel car 1960s, vossen evo 3, 3 wheel honda, 3 wheel harley for sale, three tire car, bsa 3 wheeler, 2 seater 3 wheel car, three wheel trikes for sale, razor 3 wheeler, three wheel can am, bombardier 3 wheeler, 2 stock three wheel, atc three wheeler, 3 spoke alloy wheels for bullet, polaris 3 wheeler price, new honda 3 wheeler, carver three wheeler, vespa 3 wheeler, vanderhall 3 wheeler for sale, brp 3 wheeler, tri glide wheels, 4 stock three wheel, tiny 3 wheel car, tricycle car for adults, 3 wheel race car, 3 wheel slingshot for sale, small three wheel car, aero 3s t rex 3 wheel drive, ducati 3 wheeler, raptor 3 wheel car, 3 seater trike, three wheel vanderhall, new three wheel car, venice three wheeler, 2023 spyder, ferrari 3 wheel car, 3 wheel convertible car, 3 wheel motorcycle classes near me, 3 wheel harley davidson for sale, racing 3 wheeler, 2021 aero 3s t rex 3 wheel drive, used 3 wheel car for sale, three wheel harley for sale, trike 3 wheeler, 3 s alloy wheel, 3 wheel chopper, a car with 3 wheels, 3 wheel trikes for sale, 3 wheel motorcycle course, 3 wheel basic rider course book, three wheel car vanderhall, vanderhall 3 wheel price, off road 3 wheeler, 3 wheel sport car, cam 3 wheeler, nmax 3 wheels, three wheeler can am, old 3 wheel car for sale, 3 wheel vespa for sale, old three wheel car, honda 3 wheel car, yamaha 125 3 wheeler, custom three wheelers, vanderhall 3 wheel car for sale, 3 wheel sale, 3 wheel motorcycle course near me, 3 wheel motorcycle training, trike motorcycle classes near me, 3 wheel riding course, 3 wheel motorcycle safety course near me, 3 wheel basic rider course, three wheel motorcycle course, msf 3 wheel course, accelerated three wheeled motorcycle safety courses, three wheel motorcycle training class, 3 wheel motorcycle riding class, 3 wheel motorcycle safety course, three wheel motorcycle safety course, 3 wheel motorcycle training course, three wheel basic rider course, trike motorcycle safety course, 3 wheel training, three wheel motorcycle training, msf 3 wheel basic rider course',
    title: 'Three-Wheel Basic Rider Course'
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
                <h1 class="my-0 fw-normal fs-4">3-Wheel Basic RiderCourse (3WBRCu)</h1>
            </div>

            <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4 text-start">
                    <li>This course is designed for beginning riders of all ages. The 3-wheel Basic RiderCourse consists
                        of 12 hours of instruction including approximately 5 hours using the online self-paced eCourse
                        and 7 hours of riding on the parking lot range. This course will teach you how to safely operate
                        a 3-wheel motorcycle and strongly emphasizes the special skills and mental attitude required for
                        dealing with every day riding.
                    </li>

                    <li class="mt-3">You will learn about different types of motorcycles, their controls, and how they
                        operate. The Rider Coaches, all experienced professionals, will advise you on the proper riding
                        gear to ensure comfort and protection. You will also learn how alcohol and other drugs affect
                        your ability to ride safely.
                    </li>

                    <li class="mt-3">The range is a controlled, off-street, pedestrian-free environment. Students will
                        learn and practice safely and correctly the various maneuvers and demanding situations
                        encountered in street riding. Riders must pass both a written test and a riding skills test in
                        order to complete the course. Upon successful completion, you will have met the State’s training
                        requirement for obtaining a 3-wheel motorcycle endorsement at the driver's license office.
                    </li>

                    <li class="mt-3 fw-bold">Riders must provide a street-legal 3-wheel motorcycle that passes a safety
                        inspection (T-CLOC) and provide proof of insurance and ownership.
                    </li>

                    <li class="mt-3">If the motorcycle is not owned by the rider, a notarized, written approval from the
                        owner to use the motorcycle in the course must be provided.
                    </li>

                    <li class="mt-3 fw-bold">This course meets the State of Florida requirement for obtaining a 3-wheel
                        motorcycle endorsement on your driver’s license. All students must wear the required protective
                        gear.
                    </li>

                    <li class="mt-3 fw-bold">Important: You are purchasing a seat in the class of your choice. After you
                        select and confirm the date of the class that best fits your schedule, fees are nonrefundable.
                        You must attend all class/range sessions. If you miss a class or range session or for any reason
                        do not fully complete your class, you can purchase a seat in a subsequent class for
                        ${{ formObj['3wbrc']['re_amount'] }}.
                    </li>
                </ul>

                <div class="d-flex flex-column">
                    <NuxtLink class="mx-auto mt-3"
                              target="_blank"
                              to="https://learntoride3wheel.com/webreg/production/reactapp/?book=canamregister&SC=FLBKTR01&CC=3WBU">
                        <ImageLoad alt="Can-AM Learn to ride for $99"
                                   class="d-block mx-auto img-fluid bg-black"
                                   height="175"
                                   loading="lazy"
                                   src="brp/99.webp"
                                   width="400"/>
                    </NuxtLink>

                    <div class="mt-3 text-start mx-auto">
                        For a limited time, those that want to enroll in the 3-Wheel Basic RiderCourse on a Can-AM
                        Spyder/Ryker can do so for only $99
                    </div>
                </div>

                <div class="row text-center mt-3">
                    <NuxtLink to="/register">
                        <button class="w-50 btn btn-lg btn-outline-success"
                                type="button">
                            <svg class="bi">
                                <use xlink:href="#user-plus"/>
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