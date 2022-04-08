<template>
    <div class="py-5 pt-3">
        <table class="table table-hover caption-top table-striped">
            <caption class="mb-3">
                <span class="ms-2 fw-bold text-dark">Click on a class to register.</span>
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

    <div class="row g-4 row-cols-1 row-cols-lg-2">
        <div class="col d-flex align-items-start">
            <div>
                <h3>
                    <font-awesome-icon :icon="['fas', 'clock']"
                                       class="me-1 fa-xs"/>
                    Class Times
                </h3>

                <p><span class="fw-bold">Basic RiderCourse</span> - <span class="fw-bold">Friday</span> 5:30 PM to 9:00
                    PM and <span class="fw-bold">Saturday/Sunday</span> 7:00 AM to 4:00 PM</p>

                <p><span class="fw-bold">Basic RiderCourse</span> - <span class="fw-bold">Monday</span> 12:00 PM to 4:00
                    PM and <span class="fw-bold">Tuesday/Wednesday</span> 7:00 AM to 4:00 PM</p>

                <p><span class="fw-bold">3-Wheel Basic RiderCourse</span> -
                    <span class="fw-bold">Monday & Tuesday</span> 7:00 AM to 3:00 PM on both days</p>

                <p><span class="fw-bold">Experienced RiderCourse</span> - Day & times as shown in schedule</p>
            </div>
        </div>

        <div class="col d-flex align-items-start">
            <div>
                <h3>
                    <font-awesome-icon :icon="['fas', 'map']"
                                       class="me-1 fa-xs"/>
                    Training Location
                </h3>

                <p>Harley-Davidson of Pensacola 6385 Pensacola Blvd Pensacola, FL 32505</p>

                <div class="ratio ratio-21x9">
                    <iframe allowfullscreen=""
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.4832386303056!2d-87.25632568454179!3d30.479071804863704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890bfc8ff1757f1%3A0x3fbb458075146bc2!2s6385%20Pensacola%20Blvd%2C%20Pensacola%2C%20FL%2032505!5e0!3m2!1sen!2sus!4v1644870012208!5m2!1sen!2sus"
                            style="border:0;"></iframe>
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

            if (date_from === date_to) {
                return start + dayjs(date_to).format(', YYYY');
            } else if (start_day > end_day) {
                return start + '-' + dayjs(date_to).format('MMM D, YYYY');
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