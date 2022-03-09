<template>
    <div v-if="globalSidebar.toggle"
         class="d-flex flex-column flex-shrink-0 p-3 bg-light d-print-none"
         style="width: 280px;">

        <div class="list-group list-group-flush lh-lg">
            <router-link v-for="link in links"
                         v-bind:key="link"
                         :to="{ name: link.name }"
                         class="list-group-item list-group-item-action border-dark">
                <img alt="{{ link.name }}"
                     class="me-3"
                     v-bind:src="'img/icon/' + link.img"/> <span class="fw-bold">{{ link.title }}</span>
            </router-link>
        </div>

        <div class="fixed-bottom mb-5 ms-3">
            <button class="btn d-print-none"
                    type="button"
                    v-on:click="toggleSidebar">
                <font-awesome-icon v-if="globalSidebar.toggle"
                                   :icon="['fas', 'angle-double-left']"
                                   size="lg"/>

                Hide Sidebar
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { useSidebar } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheSidebar",
    setup() {
        const { globalSidebar, toggleSidebar } = useSidebar();

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
            globalSidebar,
            links,
            toggleSidebar
        };
    }
});
</script>

<style lang="css">
.list-group-item {
    background-color: #F8F9FA;
}

.list-group-item-action:hover, .list-group-item-action:focus {
    z-index: 1;
    color: #FFFFFF;
    text-decoration: none;
    background-color: #42b983;
}
</style>