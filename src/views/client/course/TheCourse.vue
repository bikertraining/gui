<template>
    <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 mb-3 text-center py-5 pt-3">
        <div class="col mb-3">
            <div class="card rounded-3 shadow-sm h-100">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Basic RiderCourse (BRCu)</h4>
                </div>

                <div class="card-body">
                    <h1 class="card-title">${{ prices.brc }}</h1>

                    <ul class="list-unstyled mt-3 mb-4 text-start">
                        <li>This course meets the State of Florida license endorsement requirement. This course is for
                            those new to riding and is also a great course for those that are coming back to motorcycle
                            riding. Each student will be provided their own motorcycle.
                        </li>
                    </ul>
                </div>

                <div class="card-footer bg-white border-0">
                    <router-link :to="{ name: 'client:register' }">
                        <button class="w-100 btn btn-lg btn-outline-success"
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

                    <router-link :to="{ name: 'client:courses:brc' }">
                        <button class="w-100 btn btn-lg btn-outline-primary mt-3"
                                type="button">
                            <svg aria-hidden="true"
                                 data-icon="circle-info"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                                      fill="currentColor"/>
                            </svg>

                            More information
                        </button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="col mb-3">
            <div class="card rounded-3 shadow-sm h-100">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Experienced RiderCourse (BRCu2)</h4>
                </div>

                <div class="card-body">
                    <h1 class="card-title">${{ prices.erc }}</h1>

                    <ul class="list-unstyled mt-3 mb-4 text-start">
                        <li>For those that already ride and have their motorcycle endorsement but want to be better.
                            This course is designed for those that have been riding for at least three months and are
                            ready to obtain new skills. You’re good, we’ll make ya better!
                        </li>
                    </ul>
                </div>

                <div class="card-footer bg-white border-0">
                    <router-link :to="{ name: 'client:register' }">
                        <button class="w-100 btn btn-lg btn-outline-success"
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

                    <router-link :to="{ name: 'client:courses:erc' }">
                        <button class="w-100 btn btn-lg btn-outline-primary mt-3"
                                type="button">
                            <svg aria-hidden="true"
                                 data-icon="circle-info"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                                      fill="currentColor"/>
                            </svg>

                            More information
                        </button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="col mb-3">
            <div class="card rounded-3 shadow-sm h-100">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">3-Wheel Basic RiderCourse (3WBRCu)</h4>
                </div>

                <div class="card-body">
                    <h1 class="card-title">${{ prices.threewbrc }}</h1>

                    <ul class="list-unstyled mt-3 mb-4 text-start">
                        <li>This course meets the State of Florida license endorsement requirement. This course is for
                            those who want to learn to ride a 3-wheel motorcycle. Students must provide their own
                            3-wheel motorcycle for the training.
                        </li>
                    </ul>
                </div>

                <div class="card-footer bg-white border-0">
                    <router-link :to="{ name: 'client:register' }">
                        <button class="w-100 btn btn-lg btn-outline-success"
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

                    <router-link :to="{ name: 'client:courses:3wbrc' }">
                        <button class="w-100 btn btn-lg btn-outline-primary mt-3"
                                type="button">
                            <svg aria-hidden="true"
                                 data-icon="circle-info"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                                      fill="currentColor"/>
                            </svg>

                            More information
                        </button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="col mb-3">
            <div class="card rounded-3 shadow-sm h-100">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Kickstart</h4>
                </div>

                <div class="card-body">
                    <h1 class="card-title">${{ prices.kickstart }}</h1>

                    <ul class="list-unstyled mt-3 mb-4 text-start">
                        <li>This a prep course for the Basic RiderCourse for those with no motorcycle experience. While
                            not required prior to taking the Basic RiderCourse, these classes are very small with
                            emphasis on teaching basic control to riders with no riding experience.
                        </li>
                    </ul>
                </div>

                <div class="card-footer bg-white border-0">
                    <a class="text-decoration-none"
                       v-bind:href="'tel:' + business_phone.replace(/-/g,'')">
                        <button class="w-100 btn btn-lg btn-outline-danger"
                                type="button">
                            <svg aria-hidden="true"
                                 data-icon="phone"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                                      fill="currentColor"/>
                            </svg>

                            Call us at {{ business_phone }}
                        </button>
                    </a>

                    <router-link :to="{ name: 'client:courses:kickstart' }">
                        <button class="w-100 btn btn-lg btn-outline-primary mt-3"
                                type="button">
                            <svg aria-hidden="true"
                                 data-icon="circle-info"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                                      fill="currentColor"/>
                            </svg>

                            More information
                        </button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="col mb-3">
            <div class="card rounded-3 shadow-sm h-100">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Private Lessons</h4>
                </div>

                <div class="card-body">
                    <h1 class="card-title">${{ prices.private }} <small>/ per hour</small></h1>

                    <ul class="list-unstyled mt-3 mb-4 text-start">
                        <li>Private instruction is available for riders of all skill levels from beginners to advanced.
                        </li>
                    </ul>
                </div>

                <div class="card-footer bg-white border-0">
                    <a class="text-decoration-none"
                       v-bind:href="'tel:' + business_phone.replace(/-/g,'')">
                        <button class="w-100 btn btn-lg btn-outline-danger"
                                type="button">
                            <svg aria-hidden="true"
                                 data-icon="phone"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                                      fill="currentColor"/>
                            </svg>

                            Call us at {{ business_phone }}
                        </button>
                    </a>

                    <router-link :to="{ name: 'client:courses:private' }">
                        <button class="w-100 btn btn-lg btn-outline-primary mt-3"
                                type="button">
                            <svg aria-hidden="true"
                                 data-icon="circle-info"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
                                      fill="currentColor"/>
                            </svg>

                            More information
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
    name: "TheCourse",
    setup() {
        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        const prices = {
            brc: process.env.VUE_APP_PRICE_BRC,
            erc: process.env.VUE_APP_PRICE_ERC,
            threewbrc: process.env.VUE_APP_PRICE_THREEWBRC,
            kickstart: process.env.VUE_APP_PRICE_KICKSTART,
            private: process.env.VUE_APP_PRICE_PRIVATE
        };

        return {
            business_phone,
            prices
        };
    }
});
</script>