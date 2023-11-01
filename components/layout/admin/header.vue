<script lang="ts"
        setup>
const { getBusinessPhone } = useUtils();

const close = () => {
    (document.getElementById("navbarSupportedContent") as HTMLElement).classList.remove('show');
};
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-print-none">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand"
                      to="/admin/schedule"
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
                    <!-- Start Home -->
                    <li class="nav-item me-1"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/">
                            <svg class="bi">
                                <use xlink:href="#house"/>
                            </svg>

                            Home
                        </NuxtLink>
                    </li>
                    <!-- End Home -->

                    <!-- Start Schedule -->
                    <li class="nav-item me-1"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/admin/schedule">
                            <svg class="bi">
                                <use xlink:href="#calendar-days"/>
                            </svg>

                            Schedule
                        </NuxtLink>
                    </li>
                    <!-- End Schedule -->

                    <!-- Start Prices -->
                    <li class="nav-item me-1"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/admin/price">
                            <svg class="bi">
                                <use xlink:href="#hand-holding-dollar"/>
                            </svg>

                            Prices
                        </NuxtLink>
                    </li>
                    <!-- End Prices -->

                    <!-- Start Coaches -->
                    <li class="nav-item me-1"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/admin/coach">
                            <svg class="bi">
                                <use xlink:href="#users"/>
                            </svg>

                            Coaches
                        </NuxtLink>
                    </li>
                    <!-- End Coaches -->

                    <!-- Start Coupons -->
                    <li class="nav-item me-1"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/admin/coupon">
                            <svg class="bi">
                                <use xlink:href="#tag"/>
                            </svg>

                            Coupons
                        </NuxtLink>
                    </li>
                    <!-- End Coupons -->

                    <!-- Start eCourse -->
                    <li class="nav-item me-1"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/admin/ecourse">
                            <svg class="bi">
                                <use xlink:href="#link"/>
                            </svg>

                            eCourse
                        </NuxtLink>
                    </li>
                    <!-- End eCourse -->

                    <!-- Start Contact -->
                    <li class="nav-item me-1"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/admin/contact">
                            <svg class="bi">
                                <use xlink:href="#address-book"/>
                            </svg>

                            Contact
                        </NuxtLink>
                    </li>
                    <!-- End Contact -->

                    <!-- Start Fraud -->
                    <li class="nav-item me-1"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/admin/fraud">
                            <svg class="bi">
                                <use xlink:href="#crow"/>
                            </svg>

                            Fraud Strings
                        </NuxtLink>
                    </li>
                    <!-- End Fraud -->

                    <!-- Start Minimized Logout -->
                    <li class="nav-item d-lg-none"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold text-danger"
                                  to="/admin/auth/logout">
                            <svg class="bi">
                                <use xlink:href="#right-from-bracket"/>
                            </svg>

                            Logout
                        </NuxtLink>
                    </li>
                    <!-- End Minimized Logout -->
                </ul>

                <!-- Start Logout -->
                <div class="d-flex me-5 fs-5 fw-bold d-none d-lg-flex">
                    <NuxtLink class="nav-link fw-bold text-danger"
                              to="/admin/auth/logout">
                        <svg class="bi">
                            <use xlink:href="#right-from-bracket"/>
                        </svg>

                        Logout
                    </NuxtLink>
                </div>
                <!-- End Logout -->
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