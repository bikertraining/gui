<template>
    <div class="px-4 py-5 pb-3 my-1 text-center"
         style="min-height: calc(100vh - 274px) !important;">
        <h4 class="fw-bold mb-4">LEARN TO RIDE OR IMPROVE YOUR MOTORCYCLE SKILLS</h4>

        <img alt="Biker Training LLC"
             class="d-block mx-auto mb-4 img-fluid"
             height="100"
             src="/img/bikertraining_bike.svg"
             width="510.89"/>

        <h5 class="fw-bold">We are the exclusive provider for all motorcycle training at Pensacola Harley-Davidson</h5>

        <h1 class="col-lg-6 mx-auto mt-4">
            <p class="lead mb-4">Whether you are totally new to motorcycles, a returning rider or already experienced,
                we have a course to meet your needs. Our Basic RiderCourse meets the state of Florida license
                endorsement requirement.</p>

            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <router-link :to="{ name: 'client:register' }">
                    <button class="btn btn-success btn-lg px-4 gap-3"
                            type="button">
                        Sign Up Here
                    </button>
                </router-link>

                <router-link :to="{ name: 'client:schedule' }">
                    <button class="btn btn-outline-success btn-lg px-4"
                            type="button">
                        Schedule
                    </button>
                </router-link>
            </div>
        </h1>

        <hr class="w-75 mx-auto mt-5 border-1">

        <div class="d-flex justify-content-evenly flex-wrap">
            <div>
                <a href="https://www.flhsmv.gov/driver-licenses-id-cards/motorcycle-rider-education-endorsements/florida-rider-training-program-courses/"
                   target="_blank"> <img alt="Florida Rider Training Program"
                                         class="d-block img-fluid"
                                         height="200"
                                         src="/img/frtp.svg"
                                         width="200"> </a>
            </div>

            <div>
                <a href="https://msf-usa.org/"
                   target="_blank"> <img alt="Motorcycle Safety Foundation"
                                         class="d-block img-fluid mt-5"
                                         height="100"
                                         src="/img/msf_header.svg"
                                         width="215.88"> </a>
            </div>

            <div>
                <a href="https://www.pensacolaharley.com/"
                   target="_blank"> <img alt="Pensacola Harley-Davidson"
                                         class="d-block mx-auto mb-4 img-fluid mt-5"
                                         height="100"
                                         src="/img/phd.svg"
                                         width="412.66"> </a>
            </div>
        </div>

        <!--<hr class="w-75 mx-auto mt-4 border-1">

        <div class="d-flex flex-column">
            <h5 class="fw-bold">Can-Am Spyder Training</h5>

            <a class="mx-auto mt-3"
               href="https://bit.ly/2Dr72tB"
               target="_blank"> <img alt="BRP - CanAm Spyder Training"
                                     class="d-block img-fluid"
                                     src="/img/BRP_Can-Am-On-Road_REP-99_960x310.svg"
                                     style="max-height: 200px;"> </a>

            <div class="mt-3 text-start mx-auto">
                For a limited time, those that want to enroll in the 3-Wheel Basic RiderCourse on a Can-Am Spyder can do
                so for only $99.00
            </div>

            <div class="mt-3 text-start mx-auto">
                After clicking on the image, choose "Florida" and then "Pensacola".
            </div>
        </div>-->
    </div>
</template>

<script>
export default {
    name: "TheHome"
}
</script>