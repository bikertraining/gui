<template>
    <div id="top"
         class="row pt-3">
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Kickstart Course</h4>
                </div>

                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4 text-start">
                        <li>The KickStart Course uses the <span class="fw-bold">MSF’s Introductory Motorcycle Experience (IME).</span>
                            It allows the novice rider to gain familiarity and comfort with the motorcycle before taking
                            the Basic RiderCourse (BRCu).
                        </li>

                        <li class="mt-3">It is a 2-3 hour, first-touch experience with a motorcycle and not designed to
                            teach a person to ride. As a familiarization program that points out the primary parts and
                            controls of a typical motorcycle, it helps a potential rider determine whether motorcycling
                            is a good personal choice. A person is given the option to manipulate the controls while
                            astride a motorcycle, and is led into a BRC as a formal way to learn to ride. Also embedded
                            in the experience is a self-assessment component to ensure a person is aware of the risks
                            and requirements for being a good, safe and responsible rider.
                        </li>

                        <li class="mt-3 fw-bold">Note: This course is NOT FOR ENDORSEMENT</li>

                        <li class="mt-3">The KickStart Course can be given just about any time during the week and on
                            most weekends. Call to set one up. If you aren't sure if you should take this course or not,
                            call us we can help.
                        </li>

                        <li class="mt-3">Novice riders that complete this course find they are quite comfortable with
                            the motorcycle and better prepared for the BRC. (Note: This course is not required before
                            taking the BRC, it is simply a way to help prepare the true novice rider.)
                        </li>
                    </ul>

                    <div class="row">
                        <div class="text-center">
                        <button class="w-50 btn btn-lg btn-outline-success"
                                type="button">
                            <font-awesome-icon :icon="['fas', 'phone']"/>
                            Call us at {{ business_phone }}
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "TheKickstart",
    setup() {
        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });

        return {
            business_phone
        };
    }
});
</script>