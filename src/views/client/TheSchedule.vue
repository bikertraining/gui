<template>
    <div class="py-5 pt-3">
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

                <span class="fw-bold text-dark">Click on a class to register</span>
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
                <td>
                    {{ classDate(schedule['date_from'], schedule['date_to']) }} <br> <span v-if="schedule['seats'] > 0"
                                                                                           class="badge rounded-pill bg-secondary border border-dark">Sign Up Here</span>
                </td>
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
                    <svg aria-hidden="true"
                         class="text-black me-1 fs-4"
                         data-icon="clock"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 512 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
                              fill="currentColor"/>
                    </svg>

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
                    <svg aria-hidden="true"
                         class="text-black me-1 fs-4"
                         data-icon="map"
                         data-prefix="fa-solid"
                         focusable="false"
                         role="img"
                         style="display: inline-block; height: 1em; overflow: visible; vertical-align: -.125em"
                         viewBox="0 0 576 512"
                         xmlns="http://www.w3.org/2000/svg">
                        <path class=""
                              d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z"
                              fill="currentColor"/>
                    </svg>

                    Training Location
                </h3>

                <p>Harley-Davidson of Pensacola 6385 Pensacola Blvd Pensacola, FL 32505</p>

                <div class="ratio ratio-21x9">
                    <iframe allowfullscreen=""
                            height="450"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.483238630305!2d-87.25632568455873!3d30.479071804863718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890bfc8ff1757f1%3A0x3fbb458075146bc2!2s6385%20Pensacola%20Blvd%2C%20Pensacola%2C%20FL%2032505!5e0!3m2!1sen!2sus!4v1650728339732!5m2!1sen!2sus"
                            style="border:0;"
                            width="600"/>
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
        register(value: string) {
            this.$router.push({
                name: 'client:register',
                params: { id: value }
            });
        }
    }
});
</script>