<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link :to="{ name: 'client:home' }"
                         class="navbar-brand"
                         v-on:click="close()">
                <img alt="Biker Training LLC"
                     height="100"
                     src="img/bikertrainingw.png"/>
            </router-link>

            <button aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    class="navbar-toggler"
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                    type="button">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent"
                 class="collapse navbar-collapse">
                <ul class="navbar-nav mb-2 mb-lg-0 me-auto px-4">
                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <router-link :to="{ name: 'client:register'}"
                                     class="nav-link fw-bold">
                            <font-awesome-icon :icon="['fa-solid', 'user-graduate']"/>
                            Sign Up Here
                        </router-link>
                    </li>

                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <router-link :to="{ name: 'client:schedule'}"
                                     class="nav-link fw-bold">
                            <font-awesome-icon :icon="['fa-solid', 'calendar-days']"/>
                            Schedule
                        </router-link>
                    </li>

                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <router-link :to="{ name: 'client:courses'}"
                                     class="nav-link fw-bold">
                            <font-awesome-icon :icon="['fa-solid', 'graduation-cap']"/>
                            Courses
                        </router-link>
                    </li>

                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <router-link :to="{ name: 'client:faq'}"
                                     class="nav-link fw-bold">
                            <font-awesome-icon :icon="['fa-solid', 'circle-question']"/>
                            FAQs
                        </router-link>
                    </li>

                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <router-link :to="{ name: 'client:contact'}"
                                     class="nav-link fw-bold">
                            <font-awesome-icon :icon="['fa-solid', 'envelope']"/>
                            Contact Us
                        </router-link>
                    </li>

                    <li class="nav-item d-lg-none"
                        v-on:click="close()">
                        <a class="nav-link fw-bold"
                           v-bind:href="'tel:' + business_phone.replace(/-/g,'')">
                            <font-awesome-icon :icon="['fa-solid', 'phone']"/>
                            {{ business_phone }}</a>
                    </li>

                    <li v-if="globalAuth.isAdmin"
                        class="nav-item"
                        v-on:click="close()">
                        <router-link :to="{ name: 'admin:schedule:search'}"
                                     class="nav-link fw-bold text-danger">
                            <font-awesome-icon :icon="['fa-solid', 'user-secret']"/>
                            Admin
                        </router-link>
                    </li>
                </ul>

                <div class="d-flex me-5 fs-5 fw-bold d-none d-lg-flex">
                    <a class="nav-link fw-bold text-white"
                       v-bind:href="'tel:' + business_phone.replace(/-/g,'')">
                        <font-awesome-icon :icon="['fa-solid', 'phone']"/>
                        {{ business_phone }}</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { useAuth } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheHeader",
    setup() {
        const { globalAuth, initialize } = useAuth();

        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        initialize();

        return {
            globalAuth,
            business_phone
        };
    },
    methods: {
        close() {
            (document.getElementById("navbarSupportedContent") as HTMLElement).classList.remove('show');
        }
    }
});
</script>