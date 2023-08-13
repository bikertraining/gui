<script lang="ts"
        setup>
const { formArr, getSearch } = useAdminFraud();

const route = useRoute();

const router = useRouter();

definePageMeta({
    description: 'Search fraud strings',
    keywords: 'search fraud strings, fraud strings, search',
    layout: 'admin',
    title: 'Search Fraud Strings'
});

onMounted(async () => {
    await getSearch();
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5">
        <div class="row mb-3 d-print-none">
            <div class="col-auto">
                <NuxtLink to="/admin/fraud/create">
                    <button class="btn btn-success"
                            type="button">
                        <svg class="bi">
                            <use xlink:href="#crow"/>
                        </svg>

                        Create Fraud String
                    </button>
                </NuxtLink>
            </div>
        </div>

        <table class="table table-hover caption-top table-striped">
            <caption class="mb-3 d-print-none">
                <svg class="bi text-warning">
                    <use xlink:href="#star"/>
                </svg>

                <span class="fw-bold text-dark ms-1">Click on a fraud string to edit</span>
            </caption>

            <thead class="table-light border-top border-bottom border-dark border-2 border-start-0 border-end-0">
            <tr>
                <th scope="col"
                    style="width: 50%;">Name
                </th>
                <th scope="col"
                    style="width: 50%;">Type
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="coupon in formArr"
                v-bind:key="coupon"
                v-on:click="router.push({ path: `/admin/fraud/${coupon['id']}/edit`})">
                <td>{{ coupon['name'] }}</td>
                <td>{{ coupon['fraud_type_name'] }}</td>
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