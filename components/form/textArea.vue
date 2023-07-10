<script lang="ts"
        setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';

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

<style scoped>

</style>
