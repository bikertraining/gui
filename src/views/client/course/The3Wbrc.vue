<template>
    <div id="top"
         class="row pt-3">
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">3-Wheel Basic RiderCourse (3WBRCu)</h4>
                </div>

                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4 text-start">
                        <li>This course is designed for beginning riders of all ages. The 3-wheel Basic RiderCourse
                            consists of 12 hours of instruction including approximately 4 hours in the classroom and 8
                            hours of riding on the parking lot range. This course will teach you how to safely operate a
                            3-wheel motorcycle and strongly emphasizes the special skills and mental attitude required
                            for dealing with every day riding.
                        </li>

                        <li class="mt-3">Classroom instruction utilizes video and a textbook to provide practical
                            knowledge. You will learn about different types of motorcycles, their controls, and how they
                            operate. The Rider Coaches, all experienced professionals, will advise you on the proper
                            riding gear to ensure comfort and protection. You will also learn how alcohol and other
                            drugs affect your ability to ride safely.
                        </li>

                        <li class="mt-3">The range at BikerTraining.Net is a controlled, off-street, pedestrian-free
                            environment. Students will learn and practice safely and correctly the various maneuvers and
                            demanding situations encountered in street riding. Riders must pass both a written test and
                            a riding skills test in order to complete the course. Upon successful completion, you will
                            have met the State’s training requirement for obtaining a 3-wheel motorcycle endorsement at
                            the driver's license office.
                        </li>

                        <li class="mt-3 fw-bold">Riders must provide a street-legal 3-wheel motorcycle that passes a
                            safety inspection (T-CLOC) and provide proof of insurance and ownership.
                        </li>

                        <li class="mt-3">If the motorcycle is not owned by the rider, a notarized, written approval from
                            the owner to use the motorcycle in the course must be provided.
                        </li>

                        <li class="mt-3">For those that do not own a 3-wheel motorcycle, one can be rented for the
                            training course for ${{ threewbrc_rental }}.
                        </li>

                        <li class="mt-3 fw-bold">This course meets the State of Florida requirement for obtaining a
                            3-wheel motorcycle endorsement on your driver’s license. All students must wear the required
                            protective gear.
                        </li>

                        <li class="mt-3 fw-bold">Important: You are purchasing a seat in the class of your choice. After
                            you select and confirm the date of the class that best fits your schedule, fees are
                            nonrefundable. You must attend all class/range sessions. If you miss a class or range
                            session or for any reason do not fully complete your class, you can purchase a seat in a
                            subsequent class for ${{ threewbrc_reenroll}}.
                        </li>
                    </ul>

                    <div class="row text-center">
                        <router-link :to="{ name: 'client:register' }">
                            <button class="w-50 btn btn-lg btn-outline-success"
                                    type="button">
                                <font-awesome-icon :icon="['fas', 'user-plus']"/>
                                Sign up
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "The3Wbrc",
    setup() {
        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });

        const threewbrc_reenroll = process.env.VUE_APP_PRICE_THREEWBRC_REENROLL;
        const threewbrc_rental = process.env.VUE_APP_PRICE_THREEWBRC_RENTAL;

        return {
            threewbrc_reenroll,
            threewbrc_rental
        };
    }
});
</script>