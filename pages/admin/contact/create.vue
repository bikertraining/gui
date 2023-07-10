<script lang="ts"
        setup>
import { object, string } from "yup";

const { createContact, formObj } = useAdminContact();

const route = useRoute();

const schema = object({
    name: string().required(),
    email: string().required()
});

definePageMeta({
    description: 'Create contact',
    keywords: 'create contact, contact, create',
    layout: 'admin',
    title: 'Create Contact'
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5">
        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="createContact">
                <div class="row g-3">
                    <FormText v-model="formObj['name']"
                              :required="true"
                              label="Name"
                              name="name"/>

                    <FormText v-model="formObj['email']"
                              :required="true"
                              label="Email Address"
                              name="email"
                              v-on:change="formObj['email'].toLowerCase()"/>
                </div>

                <div class="d-flex justify-content-between mt-3">
                    <button class="btn btn-outline-success px-4"
                            type="submit">Create
                    </button>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>

</style>