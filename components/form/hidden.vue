<script lang="ts"
        setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
    maxLength: {
        type: String,
        default: '524288'
    },
    name: {
        type: String,
        required: true
    },
    required: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'hidden'
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
    <Field v-slot="{ field, meta, errorMessage }"
           :name="<string>name">
        <div :class="{ 'has-error': !!errorMessage, success: (field.value !== '') ? meta.valid : false, 'required': required }">
            <input :id="name"
                   v-model="field.value"
                   :maxlength="maxLength"
                   :type="type"
                   class="form-control">

            <div v-if="errorMessage"
                 v-show="errorMessage || !meta.valid"
                 class="help-message">
                {{ errorMessage }}
            </div>
        </div>
    </Field>
</template>

<style scoped>

</style>
