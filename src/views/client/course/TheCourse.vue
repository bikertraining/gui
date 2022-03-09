<template>
    <div id="top"
         class="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 mb-3 text-center pt-3">
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
                            <font-awesome-icon :icon="['fas', 'user-plus']"/>
                            Sign up
                        </button>
                    </router-link>

                    <router-link :to="{ name: 'client:courses:brc' }">
                        <button class="w-100 btn btn-lg btn-outline-primary mt-3"
                                type="button">
                            <font-awesome-icon :icon="['fas', 'circle-info']"/>
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
                            <font-awesome-icon :icon="['fas', 'user-plus']"/>
                            Sign up
                        </button>
                    </router-link>

                    <router-link :to="{ name: 'client:courses:erc' }">
                        <button class="w-100 btn btn-lg btn-outline-primary mt-3"
                                type="button">
                            <font-awesome-icon :icon="['fas', 'circle-info']"/>
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
                            those who want to learn to ride a 3-wheel motorcycle. Students provide their 3-wheel
                            motorcycles or one may be rented for the training.
                        </li>
                    </ul>
                </div>

                <div class="card-footer bg-white border-0">
                    <router-link :to="{ name: 'client:register' }">
                        <button class="w-100 btn btn-lg btn-outline-success"
                                type="button">
                            <font-awesome-icon :icon="['fas', 'user-plus']"/>
                            Sign up
                        </button>
                    </router-link>

                    <router-link :to="{ name: 'client:courses:3wbrc' }">
                        <button class="w-100 btn btn-lg btn-outline-primary mt-3"
                                type="button">
                            <font-awesome-icon :icon="['fas', 'circle-info']"/>
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
                            <font-awesome-icon :icon="['fas', 'phone']"/>
                            Call us at {{ business_phone }}
                        </button>
                    </a>

                    <router-link :to="{ name: 'client:courses:kickstart' }">
                        <button class="w-100 btn btn-lg btn-outline-primary mt-3"
                                type="button">
                            <font-awesome-icon :icon="['fas', 'circle-info']"/>
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
                            <font-awesome-icon :icon="['fas', 'phone']"/>
                            Call us at {{ business_phone }}
                        </button>
                    </a>

                    <router-link :to="{ name: 'client:courses:private' }">
                        <button class="w-100 btn btn-lg btn-outline-primary mt-3"
                                type="button">
                            <font-awesome-icon :icon="['fas', 'circle-info']"/>
                            More information
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

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

        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });

        return {
            business_phone,
            prices
        };
    }
});
</script>