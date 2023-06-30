<script lang="ts"
        setup>
const { formArr, frtp_expiration, getSearch, msf_expiration } = useAdminCoach();

const route = useRoute();

const router = useRouter();

definePageMeta({
    description: 'Search coaches',
    keywords: 'search coaches, coaches, search',
    layout: 'admin',
    title: 'Search Coaches'
});

onMounted(() => {
    getSearch();
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5">
        <div class="row mb-3 d-print-none">
            <div class="col-auto">
                <NuxtLink to="/admin/coach/create">
                    <button class="btn btn-success"
                            type="button">
                            <span class="pe-2">
                                <svg aria-hidden="true"
                                     class="text-white"
                                     data-icon="user-plus"
                                     data-prefix="fa-solid"
                                     focusable="false"
                                     role="img"
                                     style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                                     viewBox="0 0 640 512"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class=""
                                          d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"
                                          fill="currentColor"/>
                                </svg>

                            </span> Create Coach
                    </button>
                </NuxtLink>
            </div>
        </div>

        <table class="table table-hover caption-top table-striped">
            <caption class="mb-3 d-print-none">
                <svg aria-hidden="true"
                     class="text-warning ms-2 me-1"
                     data-icon="star"
                     data-prefix="fa-solid"
                     focusable="false"
                     role="img"
                     style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                     viewBox="0 0 576 512"
                     xmlns="http://www.w3.org/2000/svg">
                    <path class=""
                          d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                          fill="currentColor"/>
                </svg>

                <span class="fw-bold text-dark">Click on a coach to edit</span>
            </caption>

            <thead class="table-light border-top border-bottom border-dark border-2 border-start-0 border-end-0">
            <tr>
                <th scope="col"
                    style="width: 25%;">MSF ID
                </th>
                <th scope="col"
                    style="width: 25%;">Name
                </th>
                <th scope="col"
                    style="width: 25%;">MSF
                </th>
                <th scope="col"
                    style="width: 25%;">FRTP
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="coach in formArr"
                v-bind:key="coach"
                v-on:click="router.push({ path: `/admin/coach/edit/${coach['id']}`})">
                <td v-if="coach['msf_id'] > 0">
                    {{ coach['msf_id'] }}<br>
                </td>
                <td v-else>
                    Range Aide
                </td>
                <td>{{ coach['name'] }}</td>
                <td v-if="coach['msf_id'] > 0">
                    Expires: {{ coach['date_to'] }}

                    <svg v-if="msf_expiration(coach['date_to']) >= 6"
                         aria-hidden="true"
                         class="text-success d-print-none"
                         data-icon="check"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 448 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                              fill="currentColor"/>
                    </svg>

                    <svg v-else-if="msf_expiration(coach['date_to']) < 6 && msf_expiration(coach['date_to']) >= 0"
                         aria-hidden="true"
                         class="text-warning d-print-none"
                         data-icon="triangle-exclamation"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 512 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                              fill="currentColor"/>
                    </svg>

                    <svg v-else-if="msf_expiration(coach['date_to']) <= 0"
                         aria-hidden="true"
                         class="text-danger d-print-none"
                         data-icon="xmark"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 320 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                              fill="currentColor"/>
                    </svg>
                </td>
                <td v-else>
                    &nbsp;
                </td>
                <td v-if="coach['msf_id'] > 0">
                    Update: {{ coach['frtp_date_from'] }}

                    <svg v-if="frtp_expiration(coach['frtp_date_from']) <= 365"
                         aria-hidden="true"
                         class="text-success d-print-none"
                         data-icon="check"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 448 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                              fill="currentColor"/>
                    </svg>

                    <svg v-else-if="frtp_expiration(coach['frtp_date_from']) >= 365 && frtp_expiration(coach['frtp_date_from']) < 730"
                         aria-hidden="true"
                         class="text-warning d-print-none"
                         data-icon="triangle-exclamation"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 512 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                              fill="currentColor"/>
                    </svg>

                    <svg v-else-if="frtp_expiration(coach['frtp_date_from']) >= 730"
                         aria-hidden="true"
                         class="text-danger d-print-none"
                         data-icon="xmark"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 320 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                              fill="currentColor"/>
                    </svg>
                </td>
                <td v-else>
                    &nbsp;
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>