<script lang="ts"
        setup>
import { object, string } from "yup";

const { choices, createSchedule, formObj, getChoices } = useAdminSchedule();

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
    description: 'Create schedule',
    keywords: 'create schedule, schedule, create',
    layout: 'admin',
    title: 'Create Schedule'
});

onMounted(async () => {
    loadingState.isActive = true;

    await getChoices();

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
                  @submit="createSchedule">
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
                            type="submit">Create
                    </button>
                </div>
            </Form>
        </div>
    </div>
</template>

<style scoped>

</style>