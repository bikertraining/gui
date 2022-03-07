<template>
    <div id="top"
         class="row pt-3">
        <div class="container-fluid">
            <div class="card rounded-3 shadow-sm">
                <div class="card-header fw-bolder">
                    <font-awesome-icon :icon="['fas', 'calendar-days']"
                                       class="me-1"/>
                    Schedule
                </div>

                <div class="card-body p-0">
                    <table class="table table-hover caption-top">
                        <caption class="mb-3 mt-3">
                            <span class="ms-2 fw-bold text-dark">Click on a class to register.</span>
                        </caption>

                        <thead class="table-light">
                        <tr>
                            <th scope="col">Dates</th>
                            <th scope="col">Days</th>
                            <th scope="col">Course</th>
                            <th scope="col">Seats Available</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="schedule in formArr"
                            v-bind:key="schedule"
                            v-on="schedule['seats'] > 0 ? { click: () => register(schedule['id']) } : { click: () => $event.preventDefault() }">
                            <td>{{ classDate(schedule['date_from'], schedule['date_to']) }}</td>
                            <td>{{ schedule['day_type_name'] }}</td>
                            <td>{{ schedule['class_type_name'] }}</td>
                            <td v-if="schedule['seats'] > 0">{{ schedule['seats'] }}</td>
                            <td v-else>CLASS FULL</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-3">
        <div class="container-fluid">
            <div class="card rounded-3 shadow-sm">
                <div class="card-body">
                    <ul class="list-group list-group-flush d-grid gap-3">
                        <li class="list-group-item bg-white">
                            <h6 class="mb-2">
                                <font-awesome-icon :icon="['fas', 'location-crosshairs']"
                                                   class="me-1"/>
                                Training Location
                            </h6>
                            Harley-Davidson of Pensacola 6385 Pensacola Blvd Pensacola, FL 32505
                        </li>

                        <li class="list-group-item bg-white">
                            <h6 class="mb-2">
                                <font-awesome-icon :icon="['fas', 'clock']"
                                                   class="me-1"/>
                                Class Times for the scheduled BRC days
                            </h6>

                            <div class="mb-2">
                                <span class="fw-bold">Fri, Sat & Sun:</span> Friday 5:30 PM to 9:00 PM and
                                Saturday/Sunday 7:00 AM to 4:00 PM
                            </div>

                            <div>
                                <span class="fw-bold">Mon, Tues & Wed:</span> Monday 12:00 PM to 4:00 PM and
                                Tuesday/Wednesday 7:00 AM to 4:00 PM
                            </div>
                        </li>

                        <li class="list-group-item bg-white">
                            <h6 class="mb-2">
                                <font-awesome-icon :icon="['fas', 'clock']"
                                                   class="me-1"/>
                                Class Times for the scheduled 3 Wheel BRC days
                            </h6>
                            Two days: 7:00 AM to 3:00 PM on both days
                        </li>

                        <li class="list-group-item bg-white">
                            <h6 class="mb-2">
                                <font-awesome-icon :icon="['fas', 'clock']"
                                                   class="me-1"/>
                                Class Times for the scheduled Experienced RiderCourse
                            </h6>
                            Day & times as shown in schedule.
                        </li>

                        <li class="list-group-item bg-white">
                            <h6 class="mb-2">
                                <font-awesome-icon :icon="['fas', 'calendar-check']"
                                                   class="me-1"/>
                                KickStart Course Schedule
                            </h6>
                            The three hour KickStart Course can be given just about any time during the week and on most
                            weekends. Call to set one up. If you aren’t sure if you should take this course or not, call
                            us we can help.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useClientSchedule } from "@/composables";
import dayjs from "dayjs";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "TheSchedule",
    setup() {
        const { formArr, getSearch } = useClientSchedule();

        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();

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

            if (date_from === date_to) {
                return start + dayjs(date_to).format(', YYYY');
            } else {
                return start + '-' + end;
            }
        },
        register(value: string) {
            this.$router.push({
                name: 'client:register',
                params: { id: value }
            });
        }
    }
});
</script>

<style lang="css">
.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
    background-color: #198754;
    color: #FFFFFF;
}

.table tbody > tr:nth-last-child(1) {
    border-color: #FFFFFF;
}
</style>