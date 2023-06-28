<script lang="ts"
        setup>
const { status } = useAuth();

const { getBusinessPhone } = useUtils();

const close = () => {
    (document.getElementById("navbarSupportedContent") as HTMLElement).classList.remove('show');
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-print-none">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand"
                      to="/"
                      v-on:click="close()">
                <NuxtImg alt="Biker Training LLC"
                         loading="lazy"
                         preload
                         src="/img/bikertraining/logo_color_white.png"
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
                    <!-- Start Registration -->
                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/register">
                            <svg aria-hidden="true"
                                 data-icon="user-graduate"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M45.63 79.75L52 81.25v58.5C45 143.9 40 151.3 40 160c0 8.375 4.625 15.38 11.12 19.75L35.5 242C33.75 248.9 37.63 256 43.13 256h41.75c5.5 0 9.375-7.125 7.625-13.1L76.88 179.8C83.38 175.4 88 168.4 88 160c0-8.75-5-16.12-12-20.25V87.13L128 99.63l.001 60.37c0 70.75 57.25 128 128 128s127.1-57.25 127.1-128L384 99.62l82.25-19.87c18.25-4.375 18.25-27 0-31.5l-190.4-46c-13-3-26.62-3-39.63 0l-190.6 46C27.5 52.63 27.5 75.38 45.63 79.75zM359.2 312.8l-103.2 103.2l-103.2-103.2c-69.93 22.3-120.8 87.2-120.8 164.5C32 496.5 47.53 512 66.67 512h378.7C464.5 512 480 496.5 480 477.3C480 400 429.1 335.1 359.2 312.8z"
                                      fill="currentColor"/>
                            </svg>

                            Sign Up Here
                        </NuxtLink>
                    </li>
                    <!-- End Registration -->

                    <!-- Start Schedule -->
                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/schedule">
                            <svg aria-hidden="true"
                                 data-icon="calendar-days"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 448 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"
                                      fill="currentColor"/>
                            </svg>

                            Schedule
                        </NuxtLink>
                    </li>
                    <!-- End Schedule -->

                    <!-- Start Courses -->
                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/courses">
                            <svg aria-hidden="true"
                                 data-icon="graduation-cap"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 640 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"
                                      fill="currentColor"/>
                            </svg>

                            Courses
                        </NuxtLink>
                    </li>
                    <!-- End Courses -->

                    <!-- Start FAQ -->
                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/faq">
                            <svg aria-hidden="true"
                                 data-icon="circle-question"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"
                                      fill="currentColor"/>
                            </svg>

                            FAQs
                        </NuxtLink>
                    </li>
                    <!-- End FAQ -->

                    <!-- Start Contact -->
                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/contact">
                            <svg aria-hidden="true"
                                 data-icon="envelope"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                                      fill="currentColor"/>
                            </svg>

                            Contact Us
                        </NuxtLink>
                    </li>
                    <!-- End Contact -->

                    <!-- Start RC -->
                    <li class="nav-item me-3"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold"
                                  to="/team">
                            <svg aria-hidden="true"
                                 data-icon="book-open-reader"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M352 96c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM240 248V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"
                                      fill="currentColor"/>
                            </svg>

                            Join our Team
                        </NuxtLink>
                    </li>
                    <!-- End RC -->

                    <!-- Start Phone -->
                    <li class="nav-item d-lg-none"
                        v-on:click="close()">
                        <a class="nav-link fw-bold"
                           v-bind:href="'tel:' + getBusinessPhone(true)">
                            <svg aria-hidden="true"
                                 class="text-white"
                                 data-icon="phone"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                                      fill="currentColor"/>
                            </svg>

                            {{ getBusinessPhone(false) }}</a>
                    </li>
                    <!-- End Phone -->

                    <!-- Start Admin -->
                    <li v-if="status === 'authenticated'"
                        class="nav-item"
                        v-on:click="close()">
                        <NuxtLink class="nav-link fw-bold text-danger"
                                  to="/admin/schedule">
                            <svg aria-hidden="true"
                                 class="text-danger"
                                 data-icon="user-secret"
                                 data-prefix="fa-solid"
                                 focusable="false"
                                 role="img"
                                 style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                 viewBox="0 0 448 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path class=""
                                      d="M377.7 338.8l37.15-92.87C419 235.4 411.3 224 399.1 224h-57.48C348.5 209.2 352 193 352 176c0-4.117-.8359-8.057-1.217-12.08C390.7 155.1 416 142.3 416 128c0-16.08-31.75-30.28-80.31-38.99C323.8 45.15 304.9 0 277.4 0c-10.38 0-19.62 4.5-27.38 10.5c-15.25 11.88-36.75 11.88-52 0C190.3 4.5 181.1 0 170.7 0C143.2 0 124.4 45.16 112.5 88.98C63.83 97.68 32 111.9 32 128c0 14.34 25.31 27.13 65.22 35.92C96.84 167.9 96 171.9 96 176C96 193 99.47 209.2 105.5 224H48.02C36.7 224 28.96 235.4 33.16 245.9l37.15 92.87C27.87 370.4 0 420.4 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 420.4 420.1 370.4 377.7 338.8zM176 479.1L128 288l64 32l16 32L176 479.1zM271.1 479.1L240 352l16-32l64-32L271.1 479.1zM320 186C320 207 302.8 224 281.6 224h-12.33c-16.46 0-30.29-10.39-35.63-24.99C232.1 194.9 228.4 192 224 192S215.9 194.9 214.4 199C209 213.6 195.2 224 178.8 224h-12.33C145.2 224 128 207 128 186V169.5C156.3 173.6 188.1 176 224 176s67.74-2.383 96-6.473V186z"
                                      fill="currentColor"/>
                            </svg>

                            Admin
                        </NuxtLink>
                    </li>
                    <!-- End Admin -->
                </ul>

                <!-- Start Minimized Phone -->
                <div class="d-flex me-5 fs-5 fw-bold d-none d-lg-flex">
                    <a class="nav-link fw-bold text-white"
                       v-bind:href="'tel:' + getBusinessPhone(true)">
                        <svg aria-hidden="true"
                             class="text-white"
                             data-icon="phone"
                             data-prefix="fa-solid"
                             focusable="false"
                             role="img"
                             style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                             viewBox="0 0 512 512"
                             xmlns="http://www.w3.org/2000/svg">
                            <path class=""
                                  d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                                  fill="currentColor"/>
                        </svg>

                        {{ getBusinessPhone(false) }}</a>
                </div>
                <!-- End Minimized Phone -->
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>