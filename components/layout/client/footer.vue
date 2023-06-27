<script lang="ts"
        setup>

</script>

<template>
    <footer class="footer mt-auto py-3 bg-dark position-relative w-100 bottom-0 d-print-none">
        <div class="container">
            <ul class="nav justify-content-center pb-3">
                <li class="nav-item">
                    <NuxtLink to="/register"
                                 class="nav-link px-2">
                        Sign Up Here
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink to="/schedule"
                                 class="nav-link px-2">
                        Schedule
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink to="/courses"
                                 class="nav-link px-2">
                        Courses
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink to="/faq"
                                 class="nav-link px-2">
                        FAQs
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink to="/contact"
                                 class="nav-link px-2">
                        Contact Us
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink to="/team"
                                 class="nav-link px-2">
                        Join our Team
                    </NuxtLink>
                </li>
            </ul>

            <p class="text-center text-white">&copy; {{ new Date().getFullYear() }} Biker Training LLC</p>

            <ul class="nav justify-content-center pb-3">
                <li class="nav-item">
                    <NuxtLink to="/privacy"
                                 class="nav-link px-2">
                        Privacy Policy
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink to="/tos"
                                 class="nav-link px-2">
                        Terms of Service
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>

</style>