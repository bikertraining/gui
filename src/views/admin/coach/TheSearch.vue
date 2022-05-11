<template>
    <div class="d-none d-print-flex d-flex flex-row gap-2">
        <div>
            <font-awesome-icon :icon="['fas', 'check']"
                               class="text-success"/>
            Valid
        </div>

        |

        <div>
            <font-awesome-icon :icon="['fas', 'triangle-exclamation']"
                               class="text-warning"/>
            Expires within 6 months
        </div>

        |

        <div>
            <font-awesome-icon :icon="['fas', 'xmark']"
                               class="text-danger"/>
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
                                <font-awesome-icon :icon="['fas', 'user-plus']"/>
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
                <td>
                    {{ coach['msf_id'] }}<br>

                    Expires: {{ coach['date_to'] }}

                    <font-awesome-icon v-if="msf_expiration(coach['date_to']) >= 6"
                                       :icon="['fas', 'check']"
                                       class="text-success"/>

                    <font-awesome-icon v-if="msf_expiration(coach['date_to']) < 6"
                                       :icon="['fas', 'triangle-exclamation']"
                                       class="text-warning"/>

                    <font-awesome-icon v-if="msf_expiration(coach['date_to']) <= 0"
                                       :icon="['fas', 'xmark']"
                                       class="text-danger"/>
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