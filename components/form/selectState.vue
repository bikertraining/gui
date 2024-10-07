<script setup lang="ts">
import {toRef} from "vue";
import {Field, useField} from "vee-validate";

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
const {meta} = useField(name, undefined, {
  initialValue: props.value
});
</script>

<template>
  <Field
      v-slot="{ field, meta, errorMessage, handleChange, handleBlur }"
      :name="<string>name">
    <div
        :class="{ 'has-error': !!errorMessage, success: meta.valid, 'required': required }"
        class="SelectInput">
      <label
          :for="name"
          class="fw-bold form-label">
        {{ label }}
      </label>

      <select
          v-model="field.value"
          :id="name"
          class="form-control"
          @blur="handleBlur"
          @input="handleChange">
        <option value="">-- Select State --</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>

      <div
          v-if="helpText"
          class="form-text">
        {{ helpText }}
      </div>

      <div
          v-if="errorMessage"
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

select {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
  background-color 0.3s ease-in-out;
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

.SelectInput {
  position: relative;
  margin-bottom: calc(1em * 1.5);
  width: 100%;
}

.SelectInput.has-error select {
  border-color: var(--error-color);
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.SelectInput.has-error select:focus {
  border-color: var(--error-color);
}

.SelectInput.has-error .help-message {
  color: var(--error-color);
}

.SelectInput.success select {
  border-color: var(--success-color);
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.SelectInput.success select:focus {
  border-color: var(--success-color);
}

.SelectInput.success .help-message {
  color: var(--success-color);
}
</style>
