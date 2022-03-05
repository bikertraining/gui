<template>
    <div class="flex-shrink-1 p-1 border-bottom border-dark d-print-none">
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

        <div class="d-flex justify-content-center d-lg-flex fw-bolder fs-4">Call us at {{ business_phone }}</div>

        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="d-flex justify-content-center d-lg-none">
                <div class="p-2">
                    <router-link :to="{ name: 'client:home' }"
                                 class="navbar-brand">
                        <img alt="Biker Training LLC"
                             class="align-self-end"
                             height="60"
                             src="img/bt_header.svg"/>
                    </router-link>
                </div>

                <div class="p-2">
                    <router-link :to="{ name: 'client:home' }"
                                 class="navbar-brand">
                        <img alt="Motorcycle Safety Foundation"
                             class="align-self-end"
                             height="60"
                             src="img/msf_header.svg"/>
                    </router-link>
                </div>
            </div>

            <div class="dropstart d-lg-none ms-auto">
                <button id="dropdownMenuButton1"
                        aria-expanded="false"
                        class="btn btn-outline-light border d-print-none text-dark"
                        data-bs-toggle="dropdown"
                        type="button">
                    Menu <span class="navbar-toggler-icon"/>
                </button>

                <ul aria-labelledby="dropdownMenuButton1"
                    class="dropdown-menu p-0">
                    <li>
                        <router-link v-for="link in links"
                                     v-bind:key="link"
                                     :to="{ name: link.name }"
                                     class="dropdown-item list-group-item list-group-item-action">
                            <font-awesome-icon :icon="link.icon"/>
                            {{ link.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
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
                icon: ['fas', 'home'],
                name: 'client:home',
                title: 'Home'
            },
            {
                icon: ['fas', 'motorcycle'],
                name: 'client:register',
                title: 'Sign up'
            },
            {
                icon: ['fas', 'graduation-cap'],
                name: 'client:courses',
                title: 'Courses'
            },
            {
                icon: ['fas', 'calendar-days'],
                name: 'client:schedule',
                title: 'Schedule'
            },
            {
                icon: ['fas', 'circle-question'],
                name: 'client:faq',
                title: 'FAQ'
            },
            {
                icon: ['fas', 'image'],
                name: 'client:pictures',
                title: 'Pictures'
            },
            {
                icon: ['fas', 'users'],
                name: 'client:coaches',
                title: 'Rider Coaches'
            },
            {
                icon: ['fas', 'map'],
                name: 'client:map',
                title: 'Map'
            },
            {
                icon: ['fas', 'at'],
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