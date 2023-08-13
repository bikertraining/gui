<script lang="ts"
        setup>
import { object, string } from "yup";

const { choices, createFraud, formObj, getChoices } = useAdminFraud();

const route = useRoute();

const schema = object({
    fraud_type: string().required(),
    name: string().required()
});

definePageMeta({
    description: 'Create fraud string',
    keywords: 'create fraud string, fraud string, create',
    layout: 'admin',
    title: 'Create Fraud String'
});

onMounted(async () => {
    await getChoices();
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5">
        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="createFraud">
                <div class="row g-3">
                    <FormText v-model="formObj['name']"
                              :required="true"
                              label="Name"
                              name="name"
                              v-on:change="formObj['name']"/>

                    <FormSelect v-model="formObj['fraud_type']"
                                :options="choices"
                                :required="true"
                                label="Type"
                                name="fraud_type"/>
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