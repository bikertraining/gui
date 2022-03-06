<template>
    <div id="top"
         class="row pt-3">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link :to="{ name: 'admin:schedule:create' }">
                    <button class="btn btn-success"
                            type="button">
                            <span class="pe-2">
                                <font-awesome-icon :icon="['fas', 'user-plus']"/>
                            </span> Create
                    </button>
                </router-link>
            </div>

            <div class="col-auto">
                <router-link :to="{ name: 'admin:price:search' }">
                    <button class="btn btn-warning"
                            type="button">
                            <span class="pe-2">
                                <font-awesome-icon :icon="['fas', 'hand-holding-usd']"/>
                            </span> Price Management
                    </button>
                </router-link>
            </div>
        </div>
        <div class="container-fluid">
            <div class="card rounded-3 shadow-sm">
                <div class="card-header fw-bolder">
                    <font-awesome-icon :icon="['fas', 'calendar-days']"
                                       class="me-1"/>
                    Schedule
                </div>

                <div class="card-body p-0">
                    <table class="table table-hover">
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
            </div>
        </div>
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
        edit(value: string) {
            this.$router.push({
                name: 'admin:schedule:edit',
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