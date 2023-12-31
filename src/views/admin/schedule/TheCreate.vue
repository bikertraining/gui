<template>
    <div class="py-5">
        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="submitCreate">
                <div class="row g-3">
                    <div class="col-md-6">
                        <input-select v-model="formObj.price"
                                      :options="choices.price"
                                      :required="true"
                                      label="Class Type"
                                      name="price"/>
                    </div>

                    <div class="col-md-6">
                        <input-select v-model="formObj.day_type"
                                      :options="choices.day"
                                      :required="true"
                                      label="Day Type"
                                      name="day_type"/>
                    </div>

                    <div class="col-md-6">
                        <input-date v-model="formObj.date_from"
                                    :required="true"
                                    help-text="YYYY-MM-DD"
                                    label="Starting Date"
                                    name="date_from"/>
                    </div>

                    <div class="col-md-6">
                        <input-date v-model="formObj.date_to"
                                    :required="true"
                                    help-text="YYYY-MM-DD"
                                    label="Ending Date"
                                    name="date_to"/>
                    </div>

                    <div class="col-md-6">
                        <input-select v-model="formObj.seats"
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

<script lang="ts">
import { InputDate, InputSelect } from "@/components";
import { useAdminSchedule } from "@/composables";
import { Form } from "vee-validate";
import { defineComponent, onMounted } from "vue";
import { object, string } from "yup";

export default defineComponent({
    name: "TheCreate",
    components: {
        Form,
        InputDate,
        InputSelect
    },
    setup() {
        const {
            choices,
            createSchedule,
            formErrors,
            formObj,
            formSuccess,
            getChoices,
        } = useAdminSchedule();

        const schema = object({
            date_from: string().required(),
            date_to: string().required(),
            day_type: string().required(),
            price: string().required(),
            seats: string().required()
        });

        onMounted(() => {
            getChoices();
        });

        return {
            choices,
            createSchedule,
            formErrors,
            formObj,
            formSuccess,
            schema
        };
    },
    methods: {
        async submitCreate(values: Record<string, unknown>, actions: { setErrors: (arg0: Record<string, unknown>) => void; }) {
            await this.createSchedule(values);

            if (!this.formSuccess) {
                actions.setErrors(this.formErrors);
            } else {
                this.$emitter.emit('alert', {
                    display: this.formSuccess,
                    message: 'Schedule has been created.',
                    type: 'success'
                });

                await this.$router.push({
                    name: 'admin:schedule:search'
                });
            }
        }
    }
});
</script>