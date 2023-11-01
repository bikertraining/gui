<script lang="ts"
        setup>
const { status } = useAuth();

const { getBusinessPhone } = useUtils();

const close = () => {
    (document.getElementById("navbarSupportedContent") as HTMLElement).classList.remove('show');
};
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-print-none">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand"
                      to="/"
                      v-on:click="close()">
                <img alt="Biker Training LLC"
                         height="100"
                         src="/img/bikertraining/logo_color_white.webp"
                         width="255"/>
            </NuxtLink>

            <button aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    class="navbar-toggler"
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                    type="button">
                <span class="navbar-toggler-icon"/>
            </button>

            <div id="navbarSupportedContent"
                 class="collapse navbar-collapse">
                <ul class="navbar-nav mb-2 mb-lg-0 me-auto px-4">
                    <!-- Start Schedule -->
                    <li class="nav-item me-2"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/schedule">
                            <svg class="bi">
                                <use xlink:href="#calendar-days"/>
                            </svg>

                            Schedule
                        </NuxtLink>
                    </li>
                    <!-- End Schedule -->

                    <!-- Start Courses -->
                    <li class="nav-item me-2"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/courses">
                            <svg class="bi">
                                <use xlink:href="#graduation-cap"/>
                            </svg>

                            Courses
                        </NuxtLink>
                    </li>
                    <!-- End Courses -->

                    <!-- Start FAQ -->
                    <li class="nav-item me-2"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/faq">
                            <svg class="bi">
                                <use xlink:href="#circle-question"/>
                            </svg>

                            FAQs
                        </NuxtLink>
                    </li>
                    <!-- End FAQ -->

                    <!-- Start Contact -->
                    <li class="nav-item me-2"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/contact">
                            <svg class="bi">
                                <use xlink:href="#envelope"/>
                            </svg>

                            Contact Us
                        </NuxtLink>
                    </li>
                    <!-- End Contact -->

                    <!-- Start RC -->
                    <li class="nav-item me-2"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/team">
                            <svg class="bi">
                                <use xlink:href="#book-open-reader"/>
                            </svg>

                            Join our Team
                        </NuxtLink>
                    </li>
                    <!-- End RC -->

                    <!-- Start Minimized Phone -->
                    <li class="nav-item d-lg-none"
                        v-on:click="close()">
                        <a class="nav-link fw-bold"
                           v-bind:href="'tel:' + getBusinessPhone(true)">
                            <svg class="bi">
                                <use xlink:href="#phone"/>
                            </svg>

                            {{ getBusinessPhone(false) }}</a>
                    </li>
                    <!-- End Minimized Phone -->

                    <!-- Start Admin -->
                    <li v-if="status === 'authenticated'"
                        class="nav-item"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold text-danger"
                                  to="/admin/schedule">
                            <svg class="bi">
                                <use xlink:href="#user-secret"/>
                            </svg>

                            Admin
                        </NuxtLink>
                    </li>
                    <!-- End Admin -->
                </ul>

                <!-- Start Phone -->
                <div class="d-flex me-5 fs-5 fw-bold d-none d-lg-flex">
                    <a class="nav-link fw-bold text-white"
                       v-bind:href="'tel:' + getBusinessPhone(true)">
                        <svg class="bi">
                            <use xlink:href="#phone"/>
                        </svg>

                        {{ getBusinessPhone(false) }}</a>
                </div>
                <!-- End Phone -->
            </div>
        </div>
    </nav>
</template>

<style scoped>
.bi {
    display: inline-block;
    width: 1.5rem;
    height: 1rem;
    vertical-align: -.125em;
    overflow: visible;
}

.nav .nav-item .nav-link {
    color: #F8F9FA;
}

.nav .nav-item .nav-link:hover {
    color: #FE541F;
}

.navbar-nav .nav-item .nav-link {
    color: #F8F9FA;
}

.navbar-nav .nav-item .nav-link:hover {
    color: #FE541F;
}
</style>