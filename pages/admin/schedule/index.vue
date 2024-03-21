<script lang="ts"
        setup>

const { formArr, getSearch, utilClassDate } = useAdminSchedule();

const { loadingState } = usePageLoading();

const route = useRoute();

const router = useRouter();

definePageMeta({
    description: 'Search schedule',
    keywords: 'search schedule, schedule, search',
    layout: 'admin',
    title: 'Search Schedule'
});

onMounted(async () => {
    loadingState.isActive = true;

    await getSearch();

    loadingState.isActive = false;
});

useHead({
    title: 'Search Schedule'
});
</script>

<template>
    <div class="py-5">
        <div class="row mb-3">
            <div class="col-auto">
                <NuxtLink to="/admin/schedule/create">
                    <button class="btn btn-success"
                            type="button">
                        <svg class="bi">
                            <use xlink:href="#calendar-days"/>
                        </svg>

                        Create Schedule
                    </button>
                </NuxtLink>
            </div>
        </div>

        <table class="table table-hover caption-top table-striped">
            <caption class="mb-3">
                <svg class="bi text-warning">
                    <use xlink:href="#star"/>
                </svg>

                <span class="fw-bold text-dark ms-1">Click on a class to edit</span>

                <div class="fw-bold text-dark mt-3">{{ formArr.length }} Classes</div>
            </caption>

            <thead class="table-light border-top border-bottom border-dark border-2 border-start-0 border-end-0">
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
                v-on:click="router.push({ path: `/admin/schedule/${schedule['id']}/edit`})">
                <td>{{ utilClassDate(schedule['date_from'], schedule['date_to']) }}</td>
                <td>{{ schedule['day_type_name'] }}</td>
                <td>{{ schedule['class_type_name'] }}</td>
                <td v-if="schedule['seats'] > 0">{{ schedule['seats'] }}</td>
                <td v-else>CLASS FULL</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.bi {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    vertical-align: -.125em;
    overflow: visible;
}

.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
    background-color: #198754;
    color: #FFFFFF;
}

.table tbody > tr:nth-last-child(1) {
    border-color: #FFFFFF;
}
</style>