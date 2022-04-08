<template>
    <footer class="footer mt-auto py-3 bg-dark position-relative w-100 bottom-0">
        <div class="container">
            <ul class="nav justify-content-center pb-3">
                <li class="nav-item">
                    <router-link :to="{ name: 'client:register'}"
                                 class="nav-link px-2">
                        Sign Up Here
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link :to="{ name: 'client:schedule'}"
                                 class="nav-link px-2">
                        Schedule
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link :to="{ name: 'client:courses'}"
                                 class="nav-link px-2">
                        Courses
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link :to="{ name: 'client:faq'}"
                                 class="nav-link px-2">
                        FAQs
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link :to="{ name: 'client:contact'}"
                                 class="nav-link px-2">
                        Contact Us
                    </router-link>
                </li>
            </ul>


            <p class="text-center text-white">&copy; {{ new Date().getFullYear() }} Biker Training LLC</p>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheFooter"
});
</script>