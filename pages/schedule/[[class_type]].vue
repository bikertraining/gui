<script lang="ts"
        setup>
const { formArr, getSearch, utilClassDate } = useClientSchedule();

const { loadingState } = usePageLoading();

const route = useRoute();

const router = useRouter();

definePageMeta({
    auth: false,
    description: 'Motorcycle Training Schedule',
    keywords: 'motorcycle training schedule, harley davidson motorcycle class schedule, 7 day motorcycle course, 1 day motorcycle course near me, msf course schedule, motorcycle class schedule, motorcycle safety course schedule, motorcycle track training days, csn motorcycle class schedule, msf class schedule',
    title: 'Schedule'
});

onMounted(async () => {
    loadingState.isActive = true;

    await getSearch(route.params['class_type']);

    loadingState.isActive = false;
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5 pt-3">
        <table class="table table-hover caption-top table-striped">
            <caption v-if="formArr.length > 0"
                     class="mb-3 d-print-none">
                <svg class="bi text-warning">
                    <use xlink:href="#star"/>
                </svg>

                <span class="fw-bold text-dark ms-1">Click on a class to register.</span>

                <p class="ms-2">The class starting and ending times can be found at the bottom of this page.</p>
            </caption>

            <thead v-if="formArr.length > 0"
                   class="table-light border-top border-bottom border-dark border-2 border-start-0 border-end-0">
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

            <tbody v-if="formArr.length > 0">
            <tr v-for="schedule in formArr"
                v-bind:key="schedule"
                v-on="schedule['seats'] > 0 ? { click: () => router.push(`/register/${schedule['id']}`) } : { click: () => { return false; } }">
                <td>
                    <div>
                        {{ utilClassDate(schedule['date_from'], schedule['date_to']) }}
                    </div>

                    <div v-if="schedule['seats'] > 0" class="badge rounded-pill bg-secondary border border-dark">
                        Sign Up Here
                    </div>
                </td>
                <td>{{ schedule['day_type_name'] }}</td>
                <td>{{ schedule['class_type_name'] }}</td>
                <td v-if="schedule['seats'] > 0">{{ schedule['seats'] }}</td>
                <td v-else-if="schedule['class_type'] == '3wbrc' && schedule['seats'] == 0">Call for Availability</td>
                <td v-else>CLASS FULL</td>
            </tr>
            </tbody>

            <tbody v-if="formArr.length === 0 && route.params['class_type'] === '3wbrc'"
                   class="text-danger fw-bold text-center">
            Sorry but there are no available 3-Wheel classes. However, if you had a group of at least 2 students we can
            add a private class. Call us for more information.
            </tbody>

            <tbody v-if="formArr.length === 0 && route.params['class_type'] === 'brc'"
                   class="text-danger fw-bold text-center">
            Sorry but there are no available Basic Rider classes.
            </tbody>

            <tbody v-if="formArr.length === 0 && route.params['class_type'] === 'src'"
                   class="text-danger fw-bold text-center">
            Sorry but there are no available Skilled Rider classes. However, if you had a group of at least 4
            students we can add a private class. Call us for more information.
            </tbody>

            <tbody v-if="formArr.length === 0 && route.params['class_type'] === ''"
                   class="text-danger fw-bold text-center">
            Sorry but there are no available classes.
            </tbody>
        </table>
    </div>

    <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col d-flex align-items-start">
            <div>
                <div class="fs-3 fw-semibold mb-3">
                    <svg class="bi-clock-map">
                        <use xlink:href="#clock"/>
                    </svg>

                    Class Times
                </div>

                <div class="mb-3">
                    <span class="fw-bold">3-Wheel Basic RiderCourse</span> -
                    <span class="fw-bold">Sunday</span> 1:00 PM to 4:00 PM and
                    <span class="fw-bold">Monday</span> 7:00 AM to 3:00 PM
                </div>

                <div class="mb-3">
                    <span class="fw-bold">Basic RiderCourse</span> -
                    <span class="fw-bold">Saturday & Sunday</span> or
                    <span class="fw-bold">Monday & Tuesday</span> or
                    <span class="fw-bold">Thursday & Friday</span> 7:00 AM to 4:00 PM
                </div>

                <div>
                    <span class="fw-bold">Skilled RiderCourse</span> -
                    <span class="fw-bold">Sunday</span> 12:00 PM (Noon) to 5:30 PM
                </div>
            </div>
        </div>

        <div class="col d-flex align-items-start">
            <div class="flex-grow-1">
                <div class="fs-3 fw-semibold mb-3">
                    <svg class="bi-clock-map">
                        <use xlink:href="#map"/>
                    </svg>

                    Training Location
                </div>

                <div class="mt-0">Pensacola Harley-Davidson</div>
                <div class="mt-0">6385 Pensacola Blvd</div>
                <div class="mb-3">Pensacola, Florida, 32505</div>

                <div class="google-map">
                    <iframe allowfullscreen=""
                            height="450"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.483493187533!2d-87.25672752386812!3d30.479064597846907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890bfc8ff1757f1%3A0x3fbb458075146bc2!2s6385%20Pensacola%20Blvd%2C%20Pensacola%2C%20FL%2032505!5e0!3m2!1sen!2sus!4v1688132572004!5m2!1sen!2sus"
                            style="border:0;"
                            title="Google Map"
                            width="600"/>
                </div>
            </div>
        </div>
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

.bi-clock-map {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: -.125em;
    overflow: visible;
}

.google-map {
    padding-bottom: 50%;
    position: relative;
}

.google-map iframe {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
}

.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
    background-color: #198754;
    color: #FFFFFF;
}

.table tbody > tr:nth-last-child(1) {
    border-color: #FFFFFF;
}
</style>