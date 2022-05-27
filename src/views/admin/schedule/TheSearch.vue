<template>
    <div class="py-5">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link :to="{ name: 'admin:schedule:create' }">
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
                            </span> Create Schedule
                    </button>
                </router-link>
            </div>
        </div>

        <table class="table table-hover caption-top table-striped">
            <caption class="mb-3">
                <span class="ms-2 fw-bold text-dark">Click on a class to edit.</span>
            </caption>

            <thead class="table-light">
            <tr>
                <th scope="col"
                    style="width: 25%;">Dates
                </th>
                <th scope="col"
                    style="width: 25%;">Days
                </th>
                <th scope="col"
                    style="width: 25%;">Course
                </th>
                <th scope="col"
                    style="width: 25%;">Seats Available
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="schedule in formArr"
                v-bind:key="schedule"
                v-on:click="edit(schedule['id'])">
                <td>{{ classDate(schedule['date_from'], schedule['date_to']) }}</td>
                <td>{{ schedule['day_type_name'] }}</td>
                <td>{{ schedule['class_type_name'] }}</td>
                <td v-if="schedule['seats'] > 0">{{ schedule['seats'] }}</td>
                <td v-else>CLASS FULL</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { useAdminSchedule } from "@/composables";
import dayjs from "dayjs";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "TheSearch",
    setup() {
        const { formArr, getSearch } = useAdminSchedule();

        onMounted(() => {
            getSearch();
        });

        return {
            formArr
        };
    },
    methods: {
        classDate(date_from: string, date_to: string) {
            const start = dayjs(date_from).format('MMM D');
            const end = dayjs(date_to).format('D, YYYY');

            const start_day = dayjs(date_from).format('D');
            const end_day = dayjs(date_to).format('D');

            const start_month = dayjs(date_from).format('MM');
            const end_month = dayjs(date_to).format('MM');

            if (date_from === date_to) {
                return start + dayjs(date_to).format(', YYYY');
            } else if (start_month.padStart(2, '0') > end_month.padStart(2, '0')) {
                return dayjs(date_from).format('MMM D, YYYY') + '-' + dayjs(date_to).format('MMM D, YYYY');
            } else if (start_day.padStart(2, '0') > end_day.padStart(2, '0')) {
                return start + '-' + dayjs(date_to).format('MMM D, YYYY');
            } else {
                return start + '-' + end;
            }
        },
        edit(value: string) {
            this.$router.push({
                name: 'admin:schedule:edit',
                params: { id: value }
            });
        }
    }
});
</script>