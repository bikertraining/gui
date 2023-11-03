<script lang="ts" setup>
const route = useRoute();

const { getBusinessPhone } = useUtils();

definePageMeta({
    auth: false,
    description: 'Payment failed',
    keywords: 'payment fails',
    title: 'Payment Failed'
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

        <div class="fw-bold fs-5 mb-4">
            There appears to be a problem processing your payment.
        </div>

        <div class="fw-bold fs-5">
            Your bank returned the following information:
        </div>

        <div class="fw-bold fs-5 text-danger mb-4">
            {{ route.params['reason'] }}
        </div>

        <div class="fw-bold fs-5 mb-4">
            OR
        </div>

        <div class="fw-bold fs-5">
            <NuxtLink :to="`/register/${route.params['id']}`">
                <button class="btn btn-success btn-lg"
                        type="submit">
                    <svg class="bi">
                        <use xlink:href="#link"/>
                    </svg>

                    Click here to try again
                </button>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.bi {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: -.125em;
    overflow: visible;
}
</style>