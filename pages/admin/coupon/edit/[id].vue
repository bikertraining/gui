<script lang="ts"
        setup>
import { boolean, object, string } from "yup";

const { choices, deleteCoupon, formErrors, formObj, getChoices, getEdit, updateCoupon } = useAdminCoupon();

const route = useRoute();

const schema = object({
    amount: string().required(),
    class_type: string().required(),
    is_active: boolean(),
    name: string().required()
});

definePageMeta({
    description: 'Edit coupon',
    keywords: 'edit coupon, coupon, edit',
    layout: 'admin',
    title: 'Edit Coupon'
});

onMounted(async () => {
    await getChoices();

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
                  @submit="updateCoupon">
                <FormHidden v-model="formObj['id']"
                            :required="true"
                            name="id"/>

                <div class="row g-3">
                    <FormText v-model="formObj['name']"
                              :required="true"
                              label="Name"
                              name="name"
                              v-on:change="formObj['name'].toLowerCase()"/>

                    <FormSelect v-model="formObj['class_type']"
                                :options="choices['class']"
                                :required="true"
                                label="Class Type"
                                name="class_type"/>

                    <FormText v-model="formObj['amount']"
                              :required="true"
                              label="Amount"
                              name="amount"/>

                    <FormSwitch v-model="formObj['is_active']"
                                label="Active"
                                name="is_active"/>
                </div>

                <div class="d-flex justify-content-between mt-3">
                    <button class="btn btn-outline-success px-4"
                            type="submit">Update
                    </button>

                    <ModalDelete :delete="deleteCoupon"
                                 :message-error="formErrors"
                                 :params="{ id: route.params['id'] }"
                                 message-alert="Continuing will remove this coupon."
                                 message-success="Coupon has been removed."
                                 redirect="/admin/coupon"/>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>

</style>