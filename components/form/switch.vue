<script lang="ts"
        setup>
import { toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
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
    },
    value: {
        type: String,
        required: false
    }
});

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, 'name');

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const { meta } = useField(name, undefined, {
    initialValue: props.value
});
</script>

<template>
    <Field v-slot="{ field, meta, errorMessage, handleChange, handleBlur }"
           :name="<string>name">
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
                 class="help-message">
                {{ errorMessage.replace(name, label) }}
            </div>
        </div>
    </Field>
</template>

<style lang="css">
.help-message {
    left: 0;
    margin: 4px 0 0 0;
    font-size: 14px;
}

label {
    display: block;
    margin-bottom: 4px;
    width: 100%;
}
</style>