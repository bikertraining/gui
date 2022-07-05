<template>
    <div class="py-5">
        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="submitUpdate">
                <div class="row g-3 col-md-6">
                        <static-data :value="formObj.class_type_name"
                                     name="Class Type"/>

                        <input-text v-model="formObj.amount"
                                    :required="true"
                                    label="Amount"
                                    name="amount"/>

                        <input-text v-model="formObj.re_amount"
                                    :required="true"
                                    label="Re-Enrollment Amount"
                                    name="re_amount"/>

                        <input-text v-model="formObj.process_amount"
                                    :required="true"
                                    label="Cancellation Fee"
                                    name="process_amount"/>

                        <input-switch v-model="formObj.is_active"
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

<script lang="ts">
import { InputSwitch, InputText, StaticData } from "@/components";
import { useAdminPrice } from "@/composables";
import { Form } from "vee-validate";
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { boolean, object, string } from "yup";

export default defineComponent({
    name: "TheEdit",
    components: {
        Form,
        InputSwitch,
        InputText,
        StaticData
    },
    setup() {
        const {
            formErrors,
            formObj,
            formSuccess,
            getEdit,
            updatePrice
        } = useAdminPrice();

        const route = useRoute();

        const priceId = route.params.id.toString();

        const schema = object({
            amount: string().required(),
            is_active: boolean()
        });

        onMounted(() => {
            getEdit(priceId);
        });

        return {
            formErrors,
            formObj,
            formSuccess,
            priceId,
            schema,
            updatePrice
        };
    },
    methods: {
        async submitUpdate(values: Record<string, unknown>, actions: { setErrors: (arg0: Record<string, unknown>) => void; }) {
            await this.updatePrice(this.priceId, values);

            if (!this.formSuccess) {
                actions.setErrors(this.formErrors);
            } else {
                this.$emitter.emit('alert', {
                    display: this.formSuccess,
                    message: 'Price has been updated.',
                    type: 'success'
                });

                await this.$router.push({
                    name: 'admin:price:search'
                });
            }
        }
    }
});
</script>