<script lang="ts"
        setup>
import { object, string } from "yup";

const { deleteContact, formErrors, formObj, getEdit, updateContact } = useAdminContact();

const route = useRoute();

const schema = object({
    name: string().required(),
    email: string().required()
});

definePageMeta({
    description: 'Edit contact',
    keywords: 'edit contact, contact, edit',
    layout: 'admin',
    title: 'Edit Contact'
});

onMounted(async () => {
    await getEdit(route.params['id'].toString());
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5">
        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="updateContact">
                <FormHidden v-model="formObj['id']"
                            :required="true"
                            name="id"/>

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
                            type="submit">Update
                    </button>

                    <ModalDelete :delete="deleteContact"
                                 :message-error="formErrors"
                                 :params="{ id: route.params['id'] }"
                                 message-alert="Continuing will remove this contact."
                                 message-success="Contact has been removed."
                                 redirect="/admin/contact"/>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>

</style>