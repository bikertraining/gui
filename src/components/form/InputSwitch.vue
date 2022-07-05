<template>
    <Field v-slot="{ field, meta, errorMessage, handleChange, handleBlur }"
           :name="name">
        <div :class="{ 'has-error': !!errorMessage, success: meta.valid, 'required': false }">
            <div :class="className"
                 class="form-check form-switch">
                <input :id="name"
                       v-model="field.value"
                       :checked="field.value"
                       :disabled="disabled"
                       class="form-check-input"
                       type="checkbox"
                       v-bind="field"
                       @blur="handleBlur"
                       @input="handleChange">

                <label :for="name"
                       class="form-check-label font-weight-bold">{{ label }}</label>
            </div>

            <div v-if="helpText"
                 class="form-text">{{ helpText }}
            </div>

            <div v-if="errorMessage"
                 v-show="errorMessage || !meta.valid"
                 class="help-message text-danger">
                {{ errorMessage.replace(name, label) }}
            </div>
        </div>
    </Field>
</template>

<script lang="ts">
import { Field } from "vee-validate";
import { defineComponent } from "vue";

export default defineComponent({
    name: "InputSwitch",
    components: {
        Field
    },
    props: {
        className: {
            type: String,
            required: false
        },
        disabled: {
            type: Boolean,
            default: false
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
        }
    }
});
</script>

<style lang="scss">
@import "../../assets/scss/form";
</style>