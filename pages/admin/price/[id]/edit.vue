<script lang="ts"
        setup>
import { boolean, object, string } from "yup";

const { formObj, getEdit, updatePrice } = useAdminPrice();

const { loadingState } = usePageLoading();

const route = useRoute();

const schema = object({
    amount: string().required(),
    is_active: boolean()
});

definePageMeta({
    description: 'Edit price',
    keywords: 'edit price, price, edit',
    layout: 'admin',
    title: 'Edit Price'
});

onMounted(async () => {
    loadingState.isActive = true;

    await getEdit(route.params['id'].toString());

    loadingState.isActive = false;
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5">
        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="updatePrice">
                <div class="row g-3 col-md-6">
                    <FormHidden v-model="formObj['id']"
                                :required="true"
                                name="id"/>

                    <StaticData :value="formObj['class_type_name']"
                                name="Class Type"/>

                    <FormText v-model="formObj['amount']"
                              :required="true"
                              label="Amount"
                              name="amount"/>

                    <FormText v-model="formObj['re_amount']"
                              :required="true"
                              label="Re-Enrollment Amount"
                              name="re_amount"/>

                    <FormText v-model="formObj['process_amount']"
                              :required="true"
                              label="Cancellation Fee"
                              name="process_amount"/>

                    <FormSwitch v-model="formObj['is_active']"
                                help-text="Should this charge be processed?"
                                label="Charge Mode"
                                name="is_active"/>
                </div>

                <div class="d-flex justify-content-between mt-5">
                    <button class="btn btn-outline-success px-4"
                            type="submit">Update
                    </button>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>

</style>