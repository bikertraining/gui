<script lang="ts"
        setup>
const { formArr, getSearch } = useAdminPrice();

const { loadingState } = usePageLoading();

const route = useRoute();

const router = useRouter();

definePageMeta({
    description: 'Search prices',
    keywords: 'search prices, prices, search',
    layout: 'admin',
    title: 'Search Prices'
});

onMounted(async () => {
    loadingState.isActive = true;

    await getSearch();

    loadingState.isActive = false;
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5">
        <table class="table table-hover caption-top table-striped">
            <caption class="mb-3">
                <svg class="bi text-warning">
                    <use xlink:href="#star"/>
                </svg>

                <span class="fw-bold text-dark ms-1">Click on a price to edit</span>
            </caption>

            <thead class="table-light border-top border-bottom border-dark border-2 border-start-0 border-end-0">
            <tr>
                <th scope="col">Course</th>
                <th scope="col">Amount</th>
                <th scope="col">Charge Status</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="price in formArr"
                v-bind:key="price"
                v-on:click="router.push({ path: `/admin/price/${price['id']}/edit`})">
                <td>{{ price['class_type_name'] }}</td>
                <td>${{ price['amount'] }}</td>
                <td>
                    <span v-if="price['is_active']"
                          class="text-success">Yes</span>

                    <span v-else
                          class="text-danger">No</span>
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