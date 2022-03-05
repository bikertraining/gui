<template>
    <div id="top"
         class="row pt-3">
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Experienced RiderCourse (BRCu2)</h4>
                </div>

                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4 text-start">
                        <li>You’re good... we’ll make ya better!</li>

                        <li class="mt-3">No matter how long you have been riding, this course will make you a
                            better and safer rider.
                        </li>

                        <li class="mt-3 fw-bold">Note: This course is NOT FOR ENDORSEMENT, students must already have an
                            endorsement on their license.
                        </li>

                        <li class="mt-3">This one day course, typically held on Sundays, is for riders who
                            already own and ride a motorcycle and are interested in state-of-the-art motorcycle handling
                            techniques or for brushing up on their safe street riding skills. Increasing numbers of
                            seasoned riders are coming to the Experienced RiderCourse to fine-tune their riding and
                            mental skills needed for survival in traffic.
                        </li>

                        <li class="mt-3">You'll discuss with your peers how to balance the mental and physical aspects
                            of safe riding, managing risk, increasing visibility and optimizing lane position. The
                            course also covers protective gear, rider responsibility, motorcycle inspection and care,
                            and the effects of alcohol and other drugs on riding.
                        </li>

                        <li class="mt-3">On the range, using your own motorcycle, you will put into practice intense
                            riding activities, including the techniques of managing traction, slow speed handling,
                            stopping quickly, cornering and swerving.
                        </li>

                        <li class="mt-3"><span class="fw-bold">To qualify for participation</span>, you must have at
                            least three (3) months riding experience and have a motorcycle endorsement on your driver's
                            license.
                        </li>

                        <li><span class="fw-bold">Riders must provide a street-legal bike that passes a
                                safety inspection (T-CLOCS) and provide proof of insurance and ownership.</span> If the
                            motorcycle is not owned by the rider, a notarized, written approval from the owner to use
                            the motorcycle in the course must be provided. Additionally, handlebars should not be over
                            15 inches from the grips to the lowest part of the seat.
                        </li>

                        <li class="mt-3 fw-bold">All students must wear the required protective gear.</li>

                        <li class="mt-3">Upon completion of the Experienced RiderCourse, a graduate may receive an
                            insurance discount from participating companies.
                        </li>

                        <li class="mt-3 fw-bold">Important: You are purchasing a seat in the class of your choice. After
                            you select and confirm the date of the class that best fits your schedule, fees are
                            nonrefundable. You must attend all class/range sessions. If you miss a class or range
                            session or for any reason do not fully complete your class, you can purchase a seat in a
                            subsequent class for $50.00.
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
    name: "TheErc",
    setup() {
        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });
    }
});
</script>