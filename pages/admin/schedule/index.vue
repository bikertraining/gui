<script lang="ts"
        setup>
const { formArr, getSearch, utilClassDate } = useAdminSchedule();

const route = useRoute();

const router = useRouter();

definePageMeta({
    description: 'Search schedule',
    keywords: 'search schedule, schedule, search',
    layout: 'admin',
    title: 'Search Schedule'
});

onMounted(() => {
    getSearch();
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
                </NuxtLink>
            </div>
        </div>

        <table class="table table-hover caption-top table-striped">
            <caption class="mb-3">
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

                <span class="fw-bold text-dark">Click on a class to edit</span>
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
                v-on:click="router.push({ path: `/admin/schedule/edit/${schedule['id']}`})">
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

</style>