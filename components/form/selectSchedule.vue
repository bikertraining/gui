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
    initialValue: props.value,
});

function classGroup(arr: any) {
    const brc: any = {};
    const erc: any = {};
    const threewbrc: any = {};

    Object.keys(arr).forEach(key => {
        if (arr[key].split('| ')[2] === 'Basic RiderCourse') {
            brc[key] = arr[key];
        } else if (arr[key].split('| ')[2] === 'Experienced RiderCourse') {
            erc[key] = arr[key];
        } else if (arr[key].split('| ')[2] === 'Three-Wheeled Basic RiderCourse') {
            threewbrc[key] = arr[key];
        }
    });

    return {
        'brc': brc,
        'erc': erc,
        'threewbrc': threewbrc
    };
}
</script>

<template>
    <Field v-slot="{ field, meta, errorMessage, handleChange, handleBlur }"
           :name="<string>name">
        <div :class="{ 'has-error': !!errorMessage, success: meta.valid, 'required': required }"
             class="SelectInput">
            <label :for="name"
                   class="fw-bold form-label">{{ label }}</label>

            <select :id="name"
                    v-model="field.value"
                    :name="name"
                    class="form-control"
                    v-bind="field"
                    @blur="handleBlur"
                    @input="handleChange">
                <option v-if="!field.value"
                        :value="field.value"
                        selected>-- Select {{ label }} --
                </option>

                <optgroup v-if="Object.keys(classGroup($attrs.options).brc).length > 0"
                          label="Basic RiderCourse">
                    <option v-for="(val, key) in classGroup($attrs.options).brc"
                            v-bind:key="key"
                            :selected="field.value === key"
                            :value="key">{{ val.split('| ')[0] }} ({{ val.split('| ')[1].trim() }})
                    </option>
                </optgroup>

                <optgroup v-if="Object.keys(classGroup($attrs.options).erc).length > 0"
                          label="Experienced RiderCourse">
                    <option v-for="(val, key) in classGroup($attrs.options).erc"
                            v-bind:key="key"
                            :selected="field.value === key"
                            :value="key">{{ val.split('| ')[0] }} - {{ val.split('| ')[1].trim() }}
                    </option>
                </optgroup>

                <optgroup v-if="Object.keys(classGroup($attrs.options).threewbrc).length > 0"
                          label="3 Wheel Basic RiderCourse">
                    <option v-for="(val, key) in classGroup($attrs.options).threewbrc"
                            v-bind:key="key"
                            :selected="field.value === key"
                            :value="key">{{ val.split('| ')[0] }} ({{ val.split('| ')[1].trim() }})
                    </option>
                </optgroup>
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

<style scoped>

</style>
