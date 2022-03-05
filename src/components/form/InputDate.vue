<template>
    <Field v-slot="{ field, meta, errorMessage, handleChange, handleBlur }"
           :name="name">
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

<script lang="ts">
import Datepicker from 'vue3-date-time-picker';
import { Field } from "vee-validate";
import { defineComponent } from "vue";

export default defineComponent({
    name: "InputDate",
    components: {
        Datepicker,
        Field
    },
    props: {
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
        }
    },
    setup() {
        const format = (date: any) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${year}-${month}-${day}`;
        }

        return {
            format
        }
    }
});
</script>

<style lang="scss">
@import "../../assets/scss/form";

@import "vue3-date-time-picker/dist/main.css";

.dp__input::placeholder {
    color: #000000;
    opacity: 1
}

.dp__theme_light {
    --dp-background-color: #FFFFFF;
    --dp-text-color: #000000;
    --dp-hover-color: #f3f3f3;
    --dp-hover-text-color: #000000;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #1976d2;
    --dp-primary-text-color: #f8f5f5;
    --dp-secondary-color: #c0c4cc;
    --dp-border-color: #CED4DA;
    --dp-menu-border-color: #ddd;
    --dp-border-color-hover: #CED4DA;
    --dp-disabled-color: #f6f6f6;
    --dp-scroll-bar-background: #f3f3f3;
    --dp-scroll-bar-color: #959595;
    --dp-success-color: #76d275;
    --dp-success-color-disabled: #a3d9b1;
    --dp-icon-color: #959595;
    --dp-danger-color: #ff6f60;
}
</style>