<script lang="ts"
        setup>
import { object, string } from "yup";

const { choices, deleteSchedule, formErrors, formObj, getChoices, getEdit, updateSchedule } = useAdminSchedule();

const { loadingState } = usePageLoading();

const route = useRoute();

const schema = object({
    date_from: string().required(),
    date_to: string().required(),
    day_type: string().required(),
    price: string().required(),
    seats: string().required()
});

definePageMeta({
    description: 'Edit schedule',
    keywords: 'edit schedule, schedule, edit',
    layout: 'admin',
    title: 'Edit Schedule'
});

onMounted(async () => {
    loadingState.isActive = true;

    await getChoices();

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
                  @submit="updateSchedule">
                <FormHidden v-model="formObj['id']"
                            :required="true"
                            name="id"/>

                <div class="row g-3">
                    <div class="col-md-6">
                        <FormSelect v-model="formObj['price']"
                                    :options="choices['price']"
                                    :required="true"
                                    label="Class Type"
                                    name="price"/>
                    </div>

                    <div class="col-md-6">
                        <FormSelect v-model="formObj['day_type']"
                                    :options="choices['day']"
                                    :required="true"
                                    label="Day Type"
                                    name="day_type"/>
                    </div>

                    <div class="col-md-6">
                        <FormTextDate v-model="formObj['date_from']"
                                      :required="true"
                                      help-text="YYYY-MM-DD"
                                      label="Starting Date"
                                      name="date_from"/>
                    </div>

                    <div class="col-md-6">
                        <FormTextDate v-model="formObj['date_to']"
                                      :required="true"
                                      help-text="YYYY-MM-DD"
                                      label="Ending Date"
                                      name="date_to"/>
                    </div>

                    <div class="col-md-6">
                        <FormSelect v-model="formObj['seats']"
                                    :options="{
                                            '0': 'Class Full',
                                            '1': '1',
                                            '2': '2',
                                            '3': '3',
                                            '4': '4',
                                            '5': '5',
                                            '6': '6',
                                            '7': '7',
                                            '8': '8',
                                            '9': '9',
                                            '10': '10',
                                            '11': '11',
                                            '12': '12'
                                          }"
                                    :required="true"
                                    label="Seats"
                                    name="seats"/>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <button class="btn btn-outline-success px-4"
                            type="submit">Update
                    </button>

                    <ModalDelete :delete="deleteSchedule"
                                 :message-error="formErrors"
                                 :params="{ id: route.params['id'].toString() }"
                                 message-alert="Continuing will remove this schedule."
                                 message-success="Schedule has been removed."
                                 redirect="/admin/schedule"/>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>

</style>