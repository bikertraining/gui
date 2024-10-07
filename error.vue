<script setup lang="ts">
const props = defineProps({
  error: <any>Object
});

const {getBusinessPhone} = useUtils();

const title = ref('');

if (props.error['statusCode'] === 403) {
  title.value = 'Access Denied';
} else if (props.error['statusCode'] === 404) {
  title.value = 'Page Not Found';
} else if (props.error['statusCode'] === 408) {
  title.value = 'Timeout';
} else if (props.error['statusCode'] === 500) {
  title.value = 'Internal Server Error';
}

useHead({
  title: title
});
</script>

<template>
  <div
      class="px-4 py-5 my-5 text-center">
    <h1>
      {{ props.error['statusCode'] }}
    </h1>

    <div
        v-if="props.error['statusCode'] === 403">
      <div
          class="mb-3">
        {{ title }}
      </div>

      <div
          class="mb-3">
        You do not have access to that resource.
      </div>

      <div>
        <NuxtLink
            to="/">
          Click here
        </NuxtLink>

        to go back to the main page.
      </div>
    </div>

    <div
        v-if="props.error['statusCode'] === 404">
      <div
          class="mb-3">
        Oops! You're lost.
      </div>

      <div
          class="mb-3">
        The page you are looking for was not found.
      </div>

      <div>
        <NuxtLink
            to="/">
          Click here
        </NuxtLink>

        to go back to the main page.
      </div>
    </div>

    <div
        v-if="props.error['statusCode'] === 408">
      <div
          class="mb-3">
        Request Timeout.
      </div>

      <div
          class="mb-3">
        The page you are looking for took too long to load.
      </div>

      <div
          class="mb-3">
        Please give us a call at

        <NuxtLink
            v-bind:href="'tel:' + getBusinessPhone(true)"
            class="link-underline link-underline-opacity-0">
          {{ getBusinessPhone(false) }}
        </NuxtLink>
      </div>

      <div>
        <NuxtLink
            to="/">
          Click here
        </NuxtLink>

        to go back to the main page.
      </div>
    </div>

    <div
        v-if="props.error['statusCode'] === 500">
      <div
          class="mb-3">
        Houston, we have a problem!
      </div>

      <div
          class="mb-3">
        The page you are looking for is temporarily unavailable.
      </div>

      <div
          class="mb-3">
        Please give us a call at

        <NuxtLink
            v-bind:href="'tel:' + getBusinessPhone(true)"
            class="link-underline link-underline-opacity-0">
          {{ getBusinessPhone(false) }}
        </NuxtLink>
      </div>

      <div>
        <NuxtLink
            to="/">
          Click here
        </NuxtLink>

        to go back to the main page.
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>