<script lang="ts"
        setup>

</script>

<template>
    <footer class="footer mt-auto py-3 bg-dark position-relative w-100 bottom-0 d-print-none">
        <div class="container">
            <ul class="nav justify-content-center pb-3">
                <li class="nav-item">
                    <NuxtLink class="nav-link px-2"
                              to="/register">
                        Sign Up Here
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink class="nav-link px-2"
                              to="/schedule">
                        Schedule
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink class="nav-link px-2"
                              to="/courses">
                        Courses
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink class="nav-link px-2"
                              to="/faq">
                        FAQs
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink class="nav-link px-2"
                              to="/contact">
                        Contact Us
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink class="nav-link px-2"
                              to="/team">
                        Join our Team
                    </NuxtLink>
                </li>
            </ul>

            <p class="text-center text-white">&copy; {{ new Date().getFullYear() }} Biker Training LLC</p>

            <ul class="nav justify-content-center pb-3">
                <li class="nav-item">
                    <NuxtLink class="nav-link px-2"
                              to="/privacy">
                        Privacy Policy
                    </NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink class="nav-link px-2"
                              to="/tos">
                        Terms of Service
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>

</style>