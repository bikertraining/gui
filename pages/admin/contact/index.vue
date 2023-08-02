<script lang="ts"
        setup>
const { emailContacts, formArr, getSearch } = useAdminContact();

const route = useRoute();

const router = useRouter();

definePageMeta({
    description: 'Search contacts',
    keywords: 'search contacts, contacts, search',
    layout: 'admin',
    title: 'Search Contacts'
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
                <NuxtLink to="/admin/contact/create">
                    <button class="btn btn-success"
                            type="button">
                        <svg class="bi">
                            <use xlink:href="#address-book"/>
                        </svg>

                        Create Contact
                    </button>
                </NuxtLink>

                <NuxtLink :to="`mailto: ${emailContacts(formArr)}`">
                    <button class="btn btn-primary ms-3"
                            type="button">
                        <svg class="bi">
                            <use xlink:href="#at"/>
                        </svg>

                        Email Contacts
                    </button>
                </NuxtLink>
            </div>
        </div>

        <table class="table table-hover caption-top table-striped">
            <caption class="mb-3 d-print-none">
                <svg class="bi text-warning">
                    <use xlink:href="#star"/>
                </svg>

                <span class="fw-bold text-dark ms-1">Click on a contact to edit</span>
            </caption>

            <thead class="table-light border-top border-bottom border-dark border-2 border-start-0 border-end-0">
            <tr>
                <th scope="col"
                    style="width: 50%;">Name
                </th>
                <th scope="col"
                    style="width: 50%;">Email Address
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="contact in formArr"
                v-bind:key="contact"
                v-on:click="router.push({ path: `/admin/contact/edit/${contact['id']}`})">
                <td>{{ contact['name'] }}</td>
                <td>{{ contact['email'] }}</td>
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