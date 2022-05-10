<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link :to="{ name: 'admin:schedule:search' }"
                         class="navbar-brand"
                         v-on:click="close()">
                <img alt="Biker Training LLC"
                     height="100"
                     src="/img/bikertrainingw.png"/>
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
                        <router-link :to="{ name: 'client:home'}"
                                     class="nav-link fw-bold">
                            <font-awesome-icon :icon="['fa-solid', 'home']"/>
                            Home
                        </router-link>
                    </li>

                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <router-link :to="{ name: 'admin:schedule:search'}"
                                     class="nav-link fw-bold">
                            <font-awesome-icon :icon="['fa-solid', 'calendar-days']"/>
                            Schedule
                        </router-link>
                    </li>

                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <router-link :to="{ name: 'admin:price:search'}"
                                     class="nav-link fw-bold">
                            <font-awesome-icon :icon="['fa-solid', 'hand-holding-usd']"/>
                            Prices
                        </router-link>
                    </li>

                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <router-link :to="{ name: 'admin:coach:search'}"
                                     class="nav-link fw-bold">
                            <font-awesome-icon :icon="['fa-solid', 'users']"/>
                            Coaches
                        </router-link>
                    </li>

                    <li class="nav-item d-lg-none"
                        v-on:click="close()">
                        <router-link :to="{ name: 'pages:logout' }"
                                     class="nav-link fw-bold text-danger">
                            <font-awesome-icon :icon="['fas', 'right-from-bracket']"/>
                            Logout
                        </router-link>
                    </li>
                </ul>

                <div class="d-flex me-5 fs-5 fw-bold d-none d-lg-flex">
                    <router-link :to="{ name: 'pages:logout' }"
                                 class="nav-link fw-bold text-danger">
                        <font-awesome-icon :icon="['fas', 'right-from-bracket']"/>
                        Logout
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheHeaderAuthenticated",
    methods: {
        close() {
            (document.getElementById("navbarSupportedContent") as HTMLElement).classList.remove('show');
        }
    }
});
</script>
