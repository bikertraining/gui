<script lang="ts"
        setup>
import { boolean, object, string } from "yup";

const { choices, createCoupon, formObj, getChoices } = useAdminCoupon();

const route = useRoute();

const schema = object({
    amount: string().required(),
    class_type: string().required(),
    is_active: boolean(),
    name: string().required()
});

definePageMeta({
    description: 'Create coupon',
    keywords: 'create coupon, coupon, create',
    layout: 'admin',
    title: 'Create Coupon'
});

onMounted(() => {
    getChoices();
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5">
        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="createCoupon">
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
                            type="submit">Create
                    </button>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>

</style>