<script lang="ts"
        setup>
import Datepicker from '@vuepic/vue-datepicker';
import "@vuepic/vue-datepicker/dist/main.css";
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
    type: {
        type: String,
        default: 'text'
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

const format = (date: any) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
};
</script>

<template>
    <Field v-slot="{ field, meta, errorMessage, handleChange, handleBlur }"
           :name="<string>name">
        <div :class="{ 'has-error': !!errorMessage, success: (field.value !== '') ? meta.valid : false, 'required': required }"
             class="TextInput">
            <label :for="name"
                   class="fw-bold form-label">{{ label }}</label>

            <datepicker :id="name"
                        v-model="field.value"
                        :auto-apply="true"
                        :enable-time-picker="false"
                        :format="format"
                        :month-change-on-scroll="false"
                        :placeholder="'-- Select ' + label + ' --'"
                        monthNameFormat="long"
                        name="date_from"
                        v-bind="field"
                        weekStart="0"
                        @blur="handleBlur"
                        @input="handleChange">
                <template #clear-icon/>
            </datepicker>

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

label {
    display: block;
    margin-bottom: 4px;
    width: 100%;
}

.help-message {
    left: 0;
    margin: 4px 0 0 0;
    font-size: 14px;
}
</style>
