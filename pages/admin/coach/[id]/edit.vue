<script lang="ts"
        setup>
import { boolean, object, string } from "yup";

const { deleteCoach, formErrors, formObj, getEdit, updateCoach } = useAdminCoach();

const { loadingState } = usePageLoading();

const route = useRoute();

const schema = object({
    address: string().required(),
    city: string().required(),
    date_to: string().required(),
    email: string().email().required(),
    frtp_date_from: string().required(),
    is_active: boolean(),
    msf_id: string(),
    name: string().required(),
    phone: string().required(),
    state: string().required(),
    zipcode: string().required()
});

definePageMeta({
    description: 'Edit coach',
    keywords: 'edit coach',
    layout: 'admin',
    title: 'Edit Coach'
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
                  @submit="updateCoach">
                <FormHidden v-model="formObj['id']"
                            :required="true"
                            name="id"/>

                <div class="row g-3">
                    <div class="col-md-6">
                        <FormText v-model="formObj['name']"
                                  :required="true"
                                  label="Name"
                                  name="name"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['address']"
                                  :required="true"
                                  label="Address"
                                  name="address"/>
                    </div>

                    <div class="col-md-4">
                        <FormText v-model="formObj['city']"
                                  :required="true"
                                  label="City"
                                  name="city"/>
                    </div>

                    <div class="col-md-4">
                        <FormSelectState v-model="formObj['state']"
                                         :required="true"
                                         country="US"
                                         label="State"
                                         name="state"/>
                    </div>

                    <div class="col-md-4">
                        <FormText v-model="formObj['zipcode']"
                                  :required="true"
                                  label="Zipcode"
                                  name="zipcode"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['email']"
                                  :required="true"
                                  label="Email"
                                  name="email"/>
                    </div>

                    <div class="col-md-6">
                        <FormText v-model="formObj['phone']"
                                  :required="true"
                                  label="Phone"
                                  name="phone"/>
                    </div>

                    <div class="col-md-4">
                        <FormText v-model="formObj['msf_id']"
                                  :required="false"
                                  label="MSF ID"
                                  name="msf_id"/>
                    </div>

                    <div class="col-md-4">
                        <FormTextDate v-model="formObj['date_to']"
                                      :required="true"
                                      help-text="YYYY-MM-DD"
                                      label="MSF Expiration Date"
                                      name="date_to"/>
                    </div>

                    <div class="col-md-4">
                        <FormTextDate v-model="formObj['frtp_date_from']"
                                      :required="true"
                                      help-text="YYYY-MM-DD"
                                      label="FRTP Update Date"
                                      name="frtp_date_from"/>
                    </div>

                    <div class="col-md-1 mb-3">
                        <FormSwitch v-model="formObj['is_active']"
                                    label="Active"
                                    name="is_active"/>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <button class="btn btn-outline-success px-4"
                            type="submit">Update
                    </button>

                    <ModalDelete :delete="deleteCoach"
                                 :message-error="formErrors"
                                 :params="{ id: route.params['id'] }"
                                 message-alert="Continuing will remove this coach."
                                 message-success="Coach has been removed."
                                 redirect="/admin/coach"/>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>

</style>