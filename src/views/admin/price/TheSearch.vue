<template>
    <div id="top"
         class="row pt-3">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link :to="{ name: 'admin:schedule:search' }">
                    <button class="btn btn-primary"
                            type="button">
                            <span class="pe-2">
                                <font-awesome-icon :icon="['fas', 'search']"/>
                            </span> Search Schedules
                    </button>
                </router-link>
            </div>
        </div>
        <div class="container-fluid">
            <div class="card rounded-3 shadow-sm">
                <div class="card-header fw-bolder">
                    <font-awesome-icon :icon="['fas', 'hand-holding-usd']"/>
                    Prices
                </div>

                <div class="card-body pb-0">
                    <table class="table table-hover">
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
            </div>
        </div>
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
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();

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