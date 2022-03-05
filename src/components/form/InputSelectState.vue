<template>
    <Field v-slot="{ field, meta, errorMessage, handleChange, handleBlur }"
           :name="name">
        <div :class="{ 'has-error': !!errorMessage, success: meta.valid, 'required': required }"
             class="SelectInput">
            <label :for="name"
                   class="fw-bold form-label">{{ label }}</label>

            <region-select :id="name"
                           v-model="field.value"
                           :autocomplete="false"
                           :country="country"
                           :name="name"
                           :region="region"
                           :usei18n="false"
                           placeholder="-- Select State --"
                           className="form-control"
                           @blur="handleBlur"
                           @input="handleChange"/>

            <div v-if="helpText"
                 class="form-text">{{ helpText }}
            </div>

            <div v-if="errorMessage"
                 v-show="errorMessage || !meta.valid"
                 class="help-message">
                {{ errorMessage.replace(name, label) }}
            </div>
        </div>
    </Field>
</template>

<script lang="ts">
import { Field } from "vee-validate";
import { defineComponent } from "vue";

export default defineComponent({
    name: "InputSelectState",
    components: {
        Field
    },
    props: {
        country: {
            required: true
        },
        helpText: {
            type: String,
            required: false
        },
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        region: {
            type: String,
            required: false
        },
        required: {
            type: Boolean,
            default: false
        }
    }
});
</script>

<style lang="scss">
@import "../../assets/scss/form";
</style>