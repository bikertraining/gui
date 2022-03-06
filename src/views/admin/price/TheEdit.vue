<template>
    <div id="top"
         class="row pt-3">
        <div class="row mb-3">
            <div class="col-auto">
                <router-link :to="{ name: 'admin:schedule:search' }">
                    <button class="btn btn-primary"
                            type="button">
                            <span class="pe-2">
                                <font-awesome-icon :icon="['fas', 'search']"/>
                            </span> Search Schedules
                    </button>
                </router-link>
            </div>

            <div class="col-auto">
                <router-link :to="{ name: 'admin:price:search' }">
                    <button class="btn btn-warning"
                            type="button">
                            <span class="pe-2">
                                <font-awesome-icon :icon="['fas', 'hand-holding-usd']"/>
                            </span> Price Management
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
                            <font-awesome-icon :icon="['fas', 'hand-holding-usd']"
                                               class="me-1"/>
                            Price Settings
                        </div>

                        <div class="card-body">
                            <static-data :value="formObj.class_type_name"
                                         name="Class Type"/>

                            <input-text v-model="formObj.amount"
                                        :required="true"
                                        label="Amount"
                                        name="amount"/>

                            <div class="d-flex justify-content-between">
                                <button class="btn btn-outline-primary px-4"
                                        type="submit">Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
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