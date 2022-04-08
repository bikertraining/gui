<template>
    <div class="py-5">
        <div class="d-inline-flex">
            <Form :validation-schema="schema"
                  @submit="submitUpdate">
                <div class="row g-3">
                    <div class="col-md-6">
                        <static-data :value="formObj.class_type_name"
                                     name="Class Type"/>
                    </div>

                    <div class="col-md-6">
                        <input-text v-model="formObj.amount"
                                    :required="true"
                                    label="Amount"
                                    name="amount"/>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <button class="btn btn-outline-success px-4"
                            type="submit">Update
                    </button>
                </div>
            </Form>
        </div>
    </div>
</template>

<script lang="ts">
import { InputText, StaticData } from "@/components";
import { useAdminPrice } from "@/composables";
import { Form } from "vee-validate";
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { object, string } from "yup";

export default defineComponent({
    name: "TheEdit",
    components: {
        Form,
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
            amount: string().required()
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