<!--suppress HtmlUnknownAttribute -->
<template>
    <Field v-slot="{ field, meta, errorMessage, handleChange, handleBlur }"
           :name="name">
        <div :class="{ 'has-error': !!errorMessage, success: meta.valid, 'required': required }"
             class="SelectInput">
            <label :for="name"
                   class="fw-bold form-label">{{ label }}</label>

            <select :id="name"
                    v-model="field.value"
                    v-bind="field"
                    :name="name"
                    class="form-control"
                    @blur="handleBlur"
                    @input="handleChange">
                <option v-if="!field.value"
                        :value="field.value"
                        selected>-- Select {{ label }} --
                </option>

                <option v-for="(val, key) in $attrs.options"
                        v-bind:key="key"
                        :selected="field.value === key"
                        :value="key">{{ val }}
                </option>
            </select>

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
    name: "InputSelect",
    components: {
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
        }
    }
});
</script>

<style lang="scss">
@import "../../assets/scss/form";
</style>