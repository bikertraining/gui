<template>
    <div class="flex-shrink-1 p-1 border-bottom border-dark d-print-none">
        <!-- Start show on desktop -->
        <div class="d-flex justify-content-center d-none d-lg-flex">
            <div class="p-2">
                <router-link :to="{ name: 'client:home' }"
                             class="navbar-brand">
                    <img alt="Biker Training LLC"
                         class="align-self-end"
                         height="100"
                         src="img/bt_header.svg"/>
                </router-link>
            </div>

            <div class="p-2">
                <router-link :to="{ name: 'client:home' }"
                             class="navbar-brand">
                    <img alt="Motorcycle Safety Foundation"
                         class="align-self-end"
                         height="100"
                         src="img/msf_header.svg"/>
                </router-link>
            </div>
        </div>
        <!-- End show on desktop -->

        <div class="d-flex justify-content-center d-lg-flex fw-bolder fs-4">
            <a class="text-dark text-decoration-none"
               v-bind:href="'tel:' + business_phone.replace(/-/g,'')">Call us at {{ business_phone }}</a>
        </div>

        <!-- Start show on phone -->
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="d-flex justify-content-center d-lg-none mx-auto">
                <div class="p-2">
                    <router-link :to="{ name: 'client:home' }"
                                 class="navbar-brand">
                        <img alt="Biker Training LLC"
                             height="60"
                             src="img/bt_header.svg"/>
                    </router-link>
                </div>

                <div class="p-2">
                    <router-link :to="{ name: 'client:home' }"
                                 class="navbar-brand">
                        <img alt="Motorcycle Safety Foundation"
                             height="60"
                             src="img/msf_header.svg"/>
                    </router-link>
                </div>
            </div>

            <div v-if="!globalSidebar.toggle"
                 class="dropdown d-grid gap-2 col-10 mx-auto mt-3">
                <button id="dropdownMenuButton12"
                        aria-expanded="false"
                        class="btn btn-success"
                        data-bs-toggle="dropdown"
                        type="button">
                    <font-awesome-icon :icon="['fa-solid', 'arrow-right']"
                                       class="text-white me-3"/>

                    Menu

                    <font-awesome-icon :icon="['fa-solid', 'arrow-left']"
                                       class="text-white ms-3"/>
                </button>

                <ul aria-labelledby="dropdownMenuButton12"
                    class="dropdown-menu p-0 w-100">
                    <li>
                        <router-link v-for="link in links"
                                     v-bind:key="link"
                                     :to="{ name: link.name }"
                                     class="dropdown-item list-group-item list-group-item-action">
                            <img alt="{{ link.name }}"
                                 class="me-3"
                                 v-bind:src="'img/icon/' + link.img"/> <span class="fw-bold">{{ link.title }}</span>
                        </router-link>

                        <button class="dropdown-item list-group-item list-group-item-action d-none d-md-block" v-on:click="toggleSidebar">
                            <font-awesome-icon v-if="!globalSidebar.toggle"
                                               :icon="['fas', 'angle-double-right']"
                                               size="lg" class="me-4"/>

                            <span class="fw-bold">Show Side Menu</span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- End show on phone -->
    </div>
</template>

<script lang="ts">
import { useSidebar } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheHeader",
    setup() {
        const { globalSidebar, toggleSidebar } = useSidebar();

        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        const links = [
            {
                img: 'motorbike.png',
                name: 'client:home',
                title: 'Home'
            },
            {
                img: 'register.png',
                name: 'client:register',
                title: 'Sign Up Here'
            },
            {
                img: 'course.png',
                name: 'client:courses',
                title: 'Courses'
            },
            {
                img: 'schedule.png',
                name: 'client:schedule',
                title: 'Schedule'
            },
            {
                img: 'faq.png',
                name: 'client:faq',
                title: 'FAQ'
            },
            {
                img: 'coach.png',
                name: 'client:coaches',
                title: 'Rider Coaches'
            },
            {
                img: 'map.png',
                name: 'client:map',
                title: 'Map'
            },
            {
                img: 'email.png',
                name: 'client:contact',
                title: 'Contact Us'
            }
        ];

        return {
            business_phone,
            globalSidebar,
            links,
            toggleSidebar
        };
    }
});
</script>

<style lang="css">
.dropdown-menu {
    left: 50% !important;
    transform: translateX(-50%) !important;
    top: 100% !important;
}
</style>