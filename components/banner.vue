<script setup lang="ts">
import {ref} from "vue";

const {$listen} = useNuxtApp();

const display = ref(false);

const displayType = ref('success');

const message = ref('');

// @ts-ignore
$listen('alert', (handler: { display: boolean; type: string | undefined; message: string; }) => {
  const main = document.getElementById('main');

  // Scroll to top of page
  // noinspection JSIncompatibleTypesComparison
  if (main !== null) {
    main.scroll(0, 0);
  }

  display.value = handler.display;

  displayType.value = (handler.type === undefined ? displayType.value : handler.type);

  message.value = handler.message;

  setTimeout(close, 5000);
});

const alertType = (val: string) => {
  if (val === 'success') {
    return {
      icon: 'check2-circle',
      color: 'success'
    };
  } else if (val === 'info') {
    return {
      icon: 'info-circle',
      color: 'info'
    };
  } else if (val === 'danger') {
    return {
      icon: 'exclamation-triangle',
      color: 'danger'
    };
  }
};

const close = () => {
  display.value = false;
};
</script>

<template>
  <div
      v-if="display"
      :class="`alert alert-${alertType(displayType).color} alert-dismissible fade show`"
      role="alert">
    <BootstrapIcon
        :name="`${alertType(displayType).icon}`"/>

    {{ message }}

    <button
        aria-label="Close"
        data-bs-dismiss="alert"
        class="btn-close"
        type="button"/>
  </div>
</template>

<style scoped>

</style>