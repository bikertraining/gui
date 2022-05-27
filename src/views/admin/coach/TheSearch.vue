<template>
    <div class="d-none d-print-flex d-flex flex-row gap-2">
        <div>
            <svg aria-hidden="true"
                 class="text-success"
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

            Valid
        </div>

        |

        <div>
            <svg aria-hidden="true"
                 class="text-warning"
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

            Expires within 6 months
        </div>

        |

        <div>
            <svg aria-hidden="true"
                 class="text-danger"
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

            Expired
        </div>
    </div>

    <div class="py-5">
        <div class="row mb-3 d-print-none">
            <div class="col-auto">
                <router-link :to="{ name: 'admin:coach:create' }">
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
                </router-link>
            </div>
        </div>

        <table class="table table-hover caption-top table-striped">
            <caption class="mb-3 d-print-none">
                <span class="ms-2 fw-bold text-dark">Click on a coach to edit.</span>
            </caption>

            <thead class="table-light">
            <tr>
                <th scope="col"
                    style="width: 25%;">MSF ID
                </th>
                <th scope="col"
                    style="width: 25%;">Name
                </th>
                <th scope="col"
                    style="width: 25%;">Address
                </th>
                <th scope="col"
                    style="width: 25%;">Contact
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="coach in formArr"
                v-bind:key="coach"
                v-on:click="edit(coach['id'])">
                <td v-if="coach['msf_id'] > 0">
                    {{ coach['msf_id'] }}<br>

                    Expires: {{ coach['date_to'] }}

                    <svg v-if="msf_expiration(coach['date_to']) >= 6"
                         aria-hidden="true"
                         class="text-success"
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
                         class="text-warning"
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
                         class="text-danger"
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
                    Range Aide
                </td>
                <td>{{ coach['name'] }}</td>
                <td>
                    {{ coach['address'] }}<br> {{ coach['city'] }}, {{ coach['state'] }}, {{ coach['zipcode'] }}
                </td>
                <td>
                    {{ coach['phone'] }}<br> {{ coach['email'] }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { useAdminCoach } from "@/composables";
import dayjs from "dayjs";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "TheSearch",
    setup() {
        const { formArr, getSearch } = useAdminCoach();

        onMounted(() => {
            getSearch();
        });

        return {
            formArr
        };
    },
    methods: {
        edit(value: string) {
            this.$router.push({
                name: 'admin:coach:edit',
                params: { id: value }
            });
        },
        msf_expiration(value: string) {
            const current_month: any = dayjs(new Date()).format('M');
            const current_year: any = dayjs(new Date()).format('YYYY');

            const msf_month: any = dayjs(value).format('M');
            const msf_year: any = dayjs(value).format('YYYY');

            return msf_month - current_month + (12 * (msf_year - current_year));
        }
    }
});
</script>