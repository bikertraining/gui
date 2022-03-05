<template>
    <div v-if="globalSidebar.toggle"
         class="d-flex flex-column flex-shrink-0 p-3 bg-light d-print-none"
         style="width: 280px;">

        <div class="list-group list-group-flush lh-lg">
            <router-link v-for="link in links"
                         v-bind:key="link"
                         :to="{ name: link.name }"
                         class="list-group-item list-group-item-action border-dark">
                <font-awesome-icon :icon="link.icon"/>
                {{ link.title }}
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { useSidebar } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheSidebar",
    setup() {
        const { globalSidebar } = useSidebar();

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
            globalSidebar,
            links
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