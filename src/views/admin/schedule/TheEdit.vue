<template>
    <div id="top"
         class="row pt-3">
        <div class="mb-3">
            <div class="col-auto">
                <router-link :to="{ name: 'admin:schedule:search' }">
                    <button class="btn btn-primary"
                            type="button">
                            <span class="pe-2">
                                <font-awesome-icon :icon="['fas', 'search']"/>
                            </span> Search
                    </button>
                </router-link>
            </div>
        </div>

        <Form :validation-schema="schema"
              @submit="submitUpdate">
            <div class="row">
                <div class="col-lg-6">
                    <div class="card rounded-3 shadow-sm mb-3">
                        <div class="card-header fw-bolder">
                            <font-awesome-icon :icon="['fas', 'calendar-days']"/>
                            Class Settings
                        </div>

                        <div class="card-body">
                            <input-select v-model="formObj.price"
                                          :options="choices.price"
                                          :required="true"
                                          label="Class Type"
                                          name="price"/>

                            <input-select v-model="formObj.day_type"
                                          :options="choices.day"
                                          :required="true"
                                          label="Day Type"
                                          name="day_type"/>

                            <input-date v-model="formObj.date_from"
                                        :required="true"
                                        help-text="YYYY-MM-DD"
                                        label="Starting Date"
                                        name="date_from"/>

                            <input-date v-model="formObj.date_to"
                                        :required="true"
                                        help-text="YYYY-MM-DD"
                                        label="Ending Date"
                                        name="date_to"/>

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

                            <div class="d-flex justify-content-between">
                                <button class="btn btn-outline-primary px-4"
                                        type="submit">Update
                                </button>

                                <modal-open-delete :delete="deleteSchedule"
                                                   :message-error="formErrors"
                                                   :params="{ id: scheduleId }"
                                                   message-alert="Continuing will remove this schedule."
                                                   message-success="Schedule has been removed."
                                                   redirect="admin:schedule:search"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    </div>
</template>

<script lang="ts">
import { InputDate, InputSelect, ModalOpenDelete } from "@/components";
import { useAdminSchedule } from "@/composables";
import { Form } from "vee-validate";
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { object, string } from "yup";

export default defineComponent({
    name: "TheEdit",
    components: {
        Form,
        InputDate,
        InputSelect,
        ModalOpenDelete
    },
    setup() {
        const {
            choices,
            deleteSchedule,
            formErrors,
            formObj,
            formSuccess,
            getChoices,
            getEdit,
            updateSchedule
        } = useAdminSchedule();

        const route = useRoute();

        const scheduleId = route.params.id.toString();

        const schema = object({
            date_from: string().required(),
            date_to: string().required(),
            day_type: string().required(),
            price: string().required(),
            seats: string().required()
        });

        onMounted(() => {
            getChoices();

            getEdit(scheduleId);
        });

        return {
            choices,
            deleteSchedule,
            formErrors,
            formObj,
            formSuccess,
            scheduleId,
            schema,
            updateSchedule
        };
    },
    methods: {
        async submitUpdate(values: Record<string, unknown>, actions: { setErrors: (arg0: Record<string, unknown>) => void; }) {
            await this.updateSchedule(this.scheduleId, values);

            if (!this.formSuccess) {
                actions.setErrors(this.formErrors);
            } else {
                this.$emitter.emit('alert', {
                    display: this.formSuccess,
                    message: 'Schedule has been updated.',
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