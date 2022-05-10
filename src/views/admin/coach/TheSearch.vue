<template>
    <div class="py-5">
        <div class="row mb-3">
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
            <caption class="mb-3">
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
                    style="width: 25%;">Email
                </th>
                <th scope="col"
                    style="width: 25%;">Phone
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="coach in formArr"
                v-bind:key="coach"
                v-on:click="edit(coach['id'])">
                <td>{{ coach['msf_id'] }}</td>
                <td>{{ coach['name'] }}</td>
                <td>{{ coach['email'] }}</td>
                <td>{{ coach['phone'] }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { useAdminCoach } from "@/composables";
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
        }
    }
});
</script>