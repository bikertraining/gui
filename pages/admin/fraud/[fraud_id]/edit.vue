<script lang="ts"
        setup>
import { number, object, string } from "yup";

const { choices, deleteFraud, formErrors, formObj, getChoices, getEdit, updateFraud } = useAdminFraud();

const route = useRoute();

const schema = object({
    fraud_id: number().required(),
    fraud_type: string().required(),
    name: string().required()
});

definePageMeta({
    description: 'Edit fraud string',
    keywords: 'edit fraud string, fraud string, edit',
    layout: 'admin',
    title: 'Edit Fraud String'
});

onMounted(async () => {
    await getChoices();

    await getEdit(route.params['fraud_id'].toString());
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5">
        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="updateFraud">
                <FormHidden v-model="route.params['fraud_id']"
                            :required="true"
                            name="fraud_id"/>

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
                            type="submit">Update
                    </button>

                    <ModalDelete :delete="deleteFraud"
                                 :message-error="formErrors"
                                 :params="{ id: route.params['fraud_id'] }"
                                 message-alert="Continuing will remove this fraud string."
                                 message-success="Fraud string has been removed."
                                 redirect="/admin/fraud"/>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>

</style>