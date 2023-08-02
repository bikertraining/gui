<script lang="ts"
        setup>
import { toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
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
    required: {
        type: Boolean,
        default: false
    },
    rows: {
        type: String,
        default: '3'
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
        <div :class="{ 'has-error': !!errorMessage, success: meta.valid, 'required': required }"
             class="TextInput">
            <label :for="name"
                   class="fw-bold form-label">{{ label }}</label>

            <textarea :id="name"
                      v-model="field.value"
                      :placeholder="label"
                      :rows="rows"
                      class="form-control"
                      v-bind="field"
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

<style lang="css">
.required label:after {
    content: "*";
    color: #FF0000;
    font-size: 20px;
    line-height: 22px;
    vertical-align: middle;
    padding-left: 3px;
}

:root {
    --primary-color: #0071fe;
    --error-color: #f23648;
    --error-bg-color: #fddfe2;
    --success-color: #21a67a;
    --success-bg-color: #e0eee4;
}

.TextInput {
    position: relative;
    margin-bottom: calc(1em * 1.5);
    width: 100%;
}

label {
    display: block;
    margin-bottom: 4px;
    width: 100%;
}

textarea {
    border-radius: 5px;
    border: 1px solid #CED4DA;
    padding: 5px 10px;
    outline: none;
    background-color: #FFFFFF;
    width: 100%;
    transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

.help-message {
    left: 0;
    margin: 4px 0 0 0;
    font-size: 14px;
}

.TextInput.has-error input {
    border-color: var(--error-color);
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.TextInput.has-error input:focus {
    border-color: var(--error-color);
}

.TextInput.has-error .help-message {
    color: var(--error-color);
}

.TextInput.success input {
    border-color: var(--success-color);
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.TextInput.success input:focus {
    border-color: var(--success-color);
}

.TextInput.success .help-message {
    color: var(--success-color);
}
</style>
