<script lang="ts"
        setup>
const { formArr, frtp_expiration, getSearch, msf_expiration } = useAdminCoach();

const route = useRoute();

const router = useRouter();

definePageMeta({
    description: 'Search coaches',
    keywords: 'search coaches, coaches, search',
    layout: 'admin',
    title: 'Search Coaches'
});

onMounted(() => {
    getSearch();
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5">
        <div class="row mb-3 d-print-none">
            <div class="col-auto">
                <NuxtLink to="/admin/coach/create">
                    <button class="btn btn-success"
                            type="button">
                        <svg class="bi">
                            <use xlink:href="#user-plus"/>
                        </svg>

                        Create Coach
                    </button>
                </NuxtLink>
            </div>
        </div>

        <table class="table table-hover caption-top table-striped">
            <caption class="mb-3 d-print-none">
                <svg class="bi text-warning">
                    <use xlink:href="#star"/>
                </svg>

                <span class="fw-bold text-dark ms-1">Click on a coach to edit</span>
            </caption>

            <thead class="table-light border-top border-bottom border-dark border-2 border-start-0 border-end-0">
            <tr>
                <th scope="col"
                    style="width: 25%;">MSF ID
                </th>
                <th scope="col"
                    style="width: 25%;">Name
                </th>
                <th scope="col"
                    style="width: 25%;">MSF
                </th>
                <th scope="col"
                    style="width: 25%;">FRTP
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="coach in formArr"
                v-bind:key="coach"
                v-on:click="router.push({ path: `/admin/coach/edit/${coach['id']}`})">
                <td v-if="coach['msf_id'] > 0">
                    {{ coach['msf_id'] }}<br>
                </td>
                <td v-else>
                    Range Aide
                </td>
                <td>{{ coach['name'] }}</td>
                <td v-if="coach['msf_id'] > 0">
                    Expires: {{ coach['date_to'] }}

                    <svg v-if="msf_expiration(coach['date_to']) >= 6"
                         class="bi text-success d-print-none">
                        <use xlink:href="#check"/>
                    </svg>

                    <svg v-else-if="msf_expiration(coach['date_to']) < 6 && msf_expiration(coach['date_to']) >= 0"
                         class="bi text-warning d-print-none">
                        <use xlink:href="#triangle-exclamation"/>
                    </svg>

                    <svg v-else-if="msf_expiration(coach['date_to']) <= 0"
                         class="bi text-danger d-print-none">
                        <use xlink:href="#xmark"/>
                    </svg>
                </td>
                <td v-else>
                    &nbsp;
                </td>
                <td v-if="coach['msf_id'] > 0">
                    Update: {{ coach['frtp_date_from'] }}

                    <svg v-if="frtp_expiration(coach['frtp_date_from']) <= 365"
                         class="bi text-success d-print-none">
                        <use xlink:href="#check"/>
                    </svg>

                    <svg v-else-if="frtp_expiration(coach['frtp_date_from']) >= 365 && frtp_expiration(coach['frtp_date_from']) < 730"
                         class="bi text-warning d-print-none">
                        <use xlink:href="#triangle-exclamation"/>
                    </svg>

                    <svg v-else-if="frtp_expiration(coach['frtp_date_from']) >= 730"
                         class="bi text-danger d-print-none">
                        <use xlink:href="#xmark"/>
                    </svg>
                </td>
                <td v-else>
                    &nbsp;
                </td>
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