<template>
    <div class="py-5">
        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="submitCreate">
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
                                    :required="true"
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
                            type="submit">Create
                    </button>
                </div>
            </Form>
        </div>
    </div>
</template>

<script lang="ts">
import { InputDate, InputSelectState, InputText } from "@/components";
import { useAdminCoach } from "@/composables";
import { Form } from "vee-validate";
import { defineComponent } from "vue";
import { object, string } from "yup";

export default defineComponent({
    name: "TheCreate",
    components: {
        Form,
        InputDate,
        InputSelectState,
        InputText
    },
    setup() {
        const {
            createCoach,
            formErrors,
            formObj,
            formSuccess
        } = useAdminCoach();

        const schema = object({
            address: string().required(),
            city: string().required(),
            date_to: string().required(),
            email: string().email().required(),
            msf_id: string().required(),
            name: string().required(),
            phone: string().required(),
            state: string().required(),
            zipcode: string().required()
        });

        return {
            createCoach,
            formErrors,
            formObj,
            formSuccess,
            schema
        };
    },
    methods: {
        async submitCreate(values: Record<string, unknown>, actions: { setErrors: (arg0: Record<string, unknown>) => void; }) {
            await this.createCoach(values);

            if (!this.formSuccess) {
                actions.setErrors(this.formErrors);
            } else {
                this.$emitter.emit('alert', {
                    display: this.formSuccess,
                    message: 'Coach has been created.',
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