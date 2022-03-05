<template>
    <div id="top"
         class="row pt-3">
        <div class="col-lg-6">
            <div class="card rounded-3 shadow-sm">
                <div class="card-header">
                    <div class="d-flex justify-content-between pt-3">
                        <h4 class="mb-3">
                            <font-awesome-icon :icon="['fas', 'at']"
                                               class="me-1"/>
                            Contact Us
                        </h4>

                        <h5>
                            <font-awesome-icon :icon="['fas', 'phone']"/>
                            {{ business_phone }}
                        </h5>
                    </div>
                </div>

                <div class="card-body">
                    <Form :validation-schema="schema"
                          @submit="submitContact">
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <input-text v-model="formObj.name"
                                            :required="true"
                                            label="Name"
                                            name="name"/>
                            </div>

                            <div class="col-md-6">
                                <input-text v-model="formObj.email"
                                            :required="true"
                                            label="Email"
                                            name="email"/>
                            </div>

                            <div class="col-md-6">
                                <input-text v-model="formObj.phone"
                                            :required="false"
                                            label="Phone Number"
                                            name="phone"/>
                            </div>

                            <div class="col-12">
                                <input-text-area v-model="formObj.message"
                                                 :required="true"
                                                 label="Questions / Comments"
                                                 name="message"
                                                 rows="7"/>
                            </div>
                        </div>

                        <hr class="my-4">

                        <button class="w-100 btn btn-success btn-lg"
                                type="submit">
                            <font-awesome-icon :icon="['fas', 'comment']"/>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { InputText, InputTextArea } from "@/components";
import { useClientContact } from "@/composables";
import { Form } from "vee-validate";
import { defineComponent, onMounted } from "vue";
import { object, string } from "yup";

export default defineComponent({
    name: "TheContact",
    components: {
        Form,
        InputText,
        InputTextArea
    },
    setup() {
        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        const {
            formErrors,
            formObj,
            formSuccess,
            sendEmail
        } = useClientContact();

        const schema = object({
            email: string().required().email(),
            message: string().required(),
            name: string().required(),
            phone: string()
        });

        onMounted(() => {
            (document.getElementById("top") as HTMLDivElement).scrollIntoView();
        });

        return {
            business_phone,
            formErrors,
            formObj,
            formSuccess,
            schema,
            sendEmail
        };
    },
    methods: {
        async submitContact(values: Record<string, unknown>, actions: { setErrors: (arg0: Record<string, unknown>) => void; }) {
            await this.sendEmail(values);

            if (!this.formSuccess) {
                actions.setErrors(this.formErrors);
            } else {
                await this.$router.push({
                    name: 'client:contact:thanks'
                });
            }
        }
    }
});
</script>