<template>
    <div class="py-5">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link :to="{ name: 'admin:schedule:create' }">
                    <button class="btn btn-success"
                            type="button">
                            <span class="pe-2">
                                <font-awesome-icon :icon="['fa-solid', 'user-plus']"/>
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