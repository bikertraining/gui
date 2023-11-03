<script lang="ts" setup>
const route = useRoute();

const { getBusinessPhone } = useUtils();

definePageMeta({
    auth: false,
    description: 'Pay Online',
    keywords: 'payment, pay online',
    title: 'Pay Online'
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="px-4 py-5 pb-3 my-1 text-center" style="min-height: calc(100vh - 274px) !important;">
        <h1 class="fw-bold mb-4 fs-4">
            Please choose a class type:
        </h1>

        <div class="fw-bold fs-5 mb-5">
            <NuxtLink to="/payment/brc">
                <button class="btn btn-success btn-lg"
                        type="submit">
                    <svg class="bi">
                        <use xlink:href="#link"/>
                    </svg>

                    Basic RiderCourse
                </button>
            </NuxtLink>
        </div>

        <div class="fw-bold fs-5 mb-5">
            <NuxtLink to="/payment/3wbrc">
                <button class="btn btn-success btn-lg"
                        type="submit">
                    <svg class="bi">
                        <use xlink:href="#link"/>
                    </svg>

                    3-Wheel Basic RiderCourse
                </button>
            </NuxtLink>
        </div>

        <div class="fw-bold fs-5 mb-5">
            <NuxtLink to="/payment/src">
                <button class="btn btn-success btn-lg"
                        type="submit">
                    <svg class="bi">
                        <use xlink:href="#link"/>
                    </svg>

                    Skilled RiderCourse
                </button>
            </NuxtLink>
        </div>

        <div class="fw-bold fs-5 mb-5">
            If you are not sure, please call us at <a class="text-dark text-decoration-none"
                                                      v-bind:href="'tel:' + getBusinessPhone(true)">{{
                getBusinessPhone(false)
                                                                                                    }}</a>
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