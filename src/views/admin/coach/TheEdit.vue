<template>
    <div class="py-5">
        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="submitUpdate">
                <div class="row g-3">
                    <div class="col-md-6">
                        <input-text v-model="formObj.name"
                                    :required="true"
                                    label="Name"
                                    name="name"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.address"
                                    :required="true"
                                    label="Address"
                                    name="address"/>
                    </div>

                    <div class="col-md-4">
                        <input-text v-model="formObj.city"
                                    :required="true"
                                    label="City"
                                    name="city"/>
                    </div>

                    <div class="col-md-4">
                        <input-select-state v-model="formObj.state"
                                            v-model:region="formObj.state"
                                            :required="true"
                                            country="US"
                                            label="State"
                                            name="state"/>
                    </div>

                    <div class="col-md-4">
                        <input-text v-model="formObj.zipcode"
                                    :required="true"
                                    label="Zipcode"
                                    name="zipcode"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.email"
                                    :required="true"
                                    label="Email"
                                    name="email"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.phone"
                                    :required="true"
                                    label="Phone"
                                    name="phone"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.msf_id"
                                    :required="false"
                                    label="MSF ID"
                                    name="msf_id"/>
                    </div>

                    <div class="col-md-6">
                        <input-date v-model="formObj.date_to"
                                    :required="true"
                                    help-text="YYYY-MM-DD"
                                    label="MSF Expiration Date"
                                    name="date_to"/>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <button class="btn btn-outline-success px-4"
                            type="submit">Update
                    </button>

                    <modal-open-delete :delete="deleteCoach"
                                       :message-error="formErrors"
                                       :params="{ id: coachId }"
                                       message-alert="Continuing will remove this coach."
                                       message-success="Coach has been removed."
                                       redirect="admin:coach:search"/>
                </div>
            </Form>
        </div>
    </div>
</template>

<script lang="ts">
import { InputDate, InputSelectState, InputText, ModalOpenDelete } from "@/components";
import { useAdminCoach } from "@/composables";
import { Form } from "vee-validate";
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { object, string } from "yup";

export default defineComponent({
    name: "TheEdit",
    components: {
        Form,
        InputDate,
        InputSelectState,
        InputText,
        ModalOpenDelete
    },
    setup() {
        const {
            deleteCoach,
            formErrors,
            formObj,
            formSuccess,
            getEdit,
            updateCoach
        } = useAdminCoach();

        const route = useRoute();

        const coachId = route.params.id.toString();

        const schema = object({
            address: string().required(),
            city: string().required(),
            date_to: string().required(),
            email: string().email().required(),
            msf_id: string(),
            name: string().required(),
            phone: string().required(),
            state: string().required(),
            zipcode: string().required()
        });

        onMounted(() => {
            getEdit(coachId);
        });

        return {
            coachId,
            deleteCoach,
            formErrors,
            formObj,
            formSuccess,
            schema,
            updateCoach
        };
    },
    methods: {
        async submitUpdate(values: Record<string, unknown>, actions: { setErrors: (arg0: Record<string, unknown>) => void; }) {
            await this.updateCoach(this.coachId, values);

            if (!this.formSuccess) {
                actions.setErrors(this.formErrors);
            } else {
                this.$emitter.emit('alert', {
                    display: this.formSuccess,
                    message: 'Coach has been updated.',
                    type: 'success'
                });

                await this.$router.push({
                    name: 'admin:coach:search'
                });
            }
        }
    }
});
</script>