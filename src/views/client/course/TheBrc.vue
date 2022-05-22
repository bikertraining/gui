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
                        hours of instruction including approximately 5 hours in the classroom and 10 hours of riding on
                        the parking lot range. This course will teach you how to operate a motorcycle safely, and
                        strongly emphasizes the special skills and mental attitude required for dealing with every day
                        riding.
                    </li>

                    <li class="mt-3">Note: Beginning riders with no motorcycle experience should consider taking the
                        “Kick Start” course which will better prepare them for successfully completing the BRC.
                    </li>

                    <li class="mt-3 fw-bold">You must be able to ride a two-wheeled bicycle to enroll in the BRC.
                    </li>

                    <li class="mt-3">Classroom instruction utilizes video and a textbook to provide practical knowledge.
                        You will learn about different types of motorcycles, their controls, and how they operate. The
                        Rider Coaches, all experienced professionals, will advise you on the proper riding gear to
                        ensure comfort and protection. You will also learn how alcohol and other drugs affect your
                        ability to ride safely.
                    </li>

                    <li class="mt-3">The range at BikerTraining.net is a controlled, off-street, pedestrian-free
                        environment. Students use motorcycles provided by the school (on loan from local dealers) to
                        learn and practice safely and correctly the various maneuvers and demanding situations
                        encountered in street riding. Riders must pass both a written test and a riding skills test in
                        order to complete the course. Upon successful completion, you will be exempt from any
                        requirement to take the State test for your motorcycle endorsement at the driver's license
                        office.
                    </li>

                    <li class="mt-3 fw-bold">This course meets the State of Florida requirement for obtaining a
                        motorcycle endorsement on your driver’s license. All students must wear the required protective
                        gear.
                    </li>

                    <li class="mt-3 fw-bold">Important: You are purchasing a seat in the class of your choice. After you
                        select and confirm the date of the class that best fits your schedule, fees are nonrefundable.
                        You must attend all class/range sessions. If you miss a class or range session or for any reason
                        do not fully complete your class, you can purchase a seat in a subsequent class for
                        ${{ brc_reenroll }}.
                    </li>
                </ul>

                <div class="row text-center">
                    <router-link :to="{ name: 'client:register' }">
                        <button class="w-50 btn btn-lg btn-outline-success"
                                type="button">
                            <font-awesome-icon :icon="['fa-solid', 'user-plus']"/>
                            Sign up
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheBrc",
    setup() {
        const brc_reenroll = process.env.VUE_APP_PRICE_BRC_REENROLL;

        return {
            brc_reenroll
        };
    }
});
</script>