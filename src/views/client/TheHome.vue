<template>
    <div id="top"
         class="row pt-3">
        <div class="container-fluid">
            <div class="card rounded-3 shadow-sm">
                <div class="card-header fw-bolder text-center">LEARN TO RIDE OR IMPROVE YOUR MOTORCYCLE SKILLS</div>

                <div class="card-body">
                    <div class="text-center fw-bolder"
                         style="color: #3C4B64;">
                        <p>If you want the best, come see us!</p>
                    </div>

                    <div class="d-flex justify-content-center">
                        <img alt="Penscola Harley-Davidson"
                             class="d-none d-lg-flex"
                             height="100"
                             src="img/phd.svg"/>

                        <img alt="Penscola Harley-Davidson"
                             class="d-lg-none"
                             height="75"
                             src="img/phd.svg"/>
                    </div>

                    <div class="text-center fw-bolder mb-3"
                         style="color: #3C4B64;">We are the exclusive provider for all motorcycle training at Pensacola
                        Harley-Davidson
                    </div>

                    <p>Thanks for visiting our website! We look forward to meeting your motorcycle training needs. With
                        nationally certified RiderCoaches, our primary goal is to allow you to develop your skills in a
                        safe and fun learning environment.</p>

                    <p>Whether you are totally new to motorcycles, a returning rider or already experienced, we have a
                        course to meet your needs.</p>

                    <p>Use the buttons to navigate our site, get information and to sign up for the course that fits
                        your needs.</p>

                    <p>Our Basic RiderCourse meets the state of Florida license endorsement requirement so at
                        BikerTraining.Net you can… Get Your Ticket To Ride!</p>

                    <p>
                        <router-link :to="{ name: 'client:register'}"
                                     class="text-decoration-none">
                            <font-awesome-icon :icon="['fa-solid', 'arrow-right']"
                                               class="text-dark"/>
                            Click Here to Sign-up
                        </router-link>
                    </p>

                    <hr>

                    <div class="text-center">
                        <p class="fw-bolder"
                           style="color: #3C4B64;">Can-AM Spyder Training</p>

                        <a class="text-decoration-none"
                           href="https://bit.ly/2Dr72tB"
                           target="_blank"> <img alt="Can-AM"
                                                 class="align-self-end img-fluid"
                                                 height="250"
                                                 src="img/canam.svg"
                                                 width="650"/> </a>

                        <p class="mt-3">For a limited time, those that want to enroll in the 3-Wheel Basic RiderCourse
                            on a Can-Am Spyder can do so for only ${{ threewbrc_special_canam }}.</p>
                    </div>

                    <div class="d-flex justify-content-center mt-3">
                        <font-awesome-icon :icon="['fab', 'facebook']"
                                           class="text-primary fa-2xl"/>
                        <span class="fw-bolder pt-1 mx-3">FOLLOW US</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "TheHome",
    setup() {
        const threewbrc_special_canam = process.env.VUE_APP_PRICE_THREEWBRC_SPECIAL_CANAM;

        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });

        return {
            threewbrc_special_canam
        };
    }
});
</script>