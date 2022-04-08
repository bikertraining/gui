<template>
    <div class="py-5">
        <table class="table table-hover caption-top table-striped">
            <caption class="mb-3">
                <span class="ms-2 fw-bold text-dark">Click on a price to edit.</span>
            </caption>

            <thead class="table-light">
            <tr>
                <th scope="col">Course</th>
                <th scope="col">Amount</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="price in formArr"
                v-bind:key="price"
                v-on:click="edit(price['id'])">
                <td>{{ price['class_type_name'] }}</td>
                <td>${{ price['amount'] }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { useAdminPrice } from "@/composables";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "TheSearch",
    setup() {
        const { formArr, getSearch } = useAdminPrice();

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
                name: 'admin:price:edit',
                params: { id: value }
            });
        }
    }
});
</script>

<style lang="css">
.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
    background-color: #198754;
    color: #FFFFFF;
}

.table tbody > tr:nth-last-child(1) {
    border-color: #FFFFFF;
}
</style>