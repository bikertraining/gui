<script lang="ts"
        setup>
definePageMeta({ layout: 'admin' });

const { formArr, getSearch } = useAdminPrice();

onMounted(() => {
    getSearch();
});

useHead({
    title: 'Search Prices'
});
</script>

<template>
    <div class="py-5">
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

                <span class="fw-bold text-dark">Click on a price to edit</span>
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
                v-on:click="useRouter().push({ path: `/admin/price/edit/${price['id']}`})">
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

</style>