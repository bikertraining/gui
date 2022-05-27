<template>
    <div class="py-5 pt-3"
         style="min-height: calc(100vh - 270px) !important;">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">3-Wheel Basic RiderCourse (3WBRCu)</h4>
            </div>

            <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4 text-start">
                    <li>This course is designed for beginning riders of all ages. The 3-wheel Basic RiderCourse consists
                        of 12 hours of instruction including approximately 4 hours in the classroom and 8 hours of
                        riding on the parking lot range. This course will teach you how to safely operate a 3-wheel
                        motorcycle and strongly emphasizes the special skills and mental attitude required for dealing
                        with every day riding.
                    </li>

                    <li class="mt-3">Classroom instruction utilizes video and a textbook to provide practical knowledge.
                        You will learn about different types of motorcycles, their controls, and how they operate. The
                        Rider Coaches, all experienced professionals, will advise you on the proper riding gear to
                        ensure comfort and protection. You will also learn how alcohol and other drugs affect your
                        ability to ride safely.
                    </li>

                    <li class="mt-3">The range at BikerTraining.Net is a controlled, off-street, pedestrian-free
                        environment. Students will learn and practice safely and correctly the various maneuvers and
                        demanding situations encountered in street riding. Riders must pass both a written test and a
                        riding skills test in order to complete the course. Upon successful completion, you will have
                        met the State’s training requirement for obtaining a 3-wheel motorcycle endorsement at the
                        driver's license office.
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
                        ${{ threewbrc_reenroll }}.
                    </li>
                </ul>

                <div class="row text-center">
                    <router-link :to="{ name: 'client:register' }">
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
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "The3Wbrc",
    setup() {
        const threewbrc_reenroll = process.env.VUE_APP_PRICE_THREEWBRC_REENROLL;

        return {
            threewbrc_reenroll
        };
    }
});
</script>