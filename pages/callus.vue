<script lang="ts"
        setup>
const route = useRoute();

const { getBusinessPhone } = useUtils();

definePageMeta({
    auth: false,
    description: 'Please call us',
    keywords: 'please, call, us',
    title: 'Please Call'
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="px-4 py-5 pb-3 my-1 text-center" style="min-height: calc(100vh - 274px) !important;">
        <h1 class="fw-bold mb-4 fs-4">
            Please call us at <a class="text-dark text-decoration-none"
                                 v-bind:href="'tel:' + getBusinessPhone(true)">{{
                getBusinessPhone(false)
                                                                               }}</a>
        </h1>

        <div class="fw-bold fs-5">
            There appears to be a problem processing your payment.
        </div>
    </div>
</template>

<style scoped>

</style>