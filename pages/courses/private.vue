<script lang="ts"
        setup>
const route = useRoute();

const { getBusinessPhone } = useUtils();

definePageMeta({
    auth: false,
    description: 'Private Motorcycle Lessons',
    keywords: 'private motorcycle class, private class, private',
    title: 'Private Motorcycle Lessons'
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5 pt-3"
         style="min-height: calc(100vh - 270px) !important;">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h1 class="my-0 fw-normal fs-4">Private Lessons</h1>
            </div>

            <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4 text-start">
                    <li class="mt-3 fw-bold">You must provide your own motorcycle.</li>

                    <li class="mt-3">Private instruction is available for riders of all skill levels from beginners to
                                     advanced.
                    </li>

                    <li class="mt-3">We can provide tailored instruction to meet your exact needs.</li>

                    <li class="mt-3 fw-bold">Note: This course is NOT FOR ENDORSEMENT. You must already have your
                                             motorcycle endorsement.
                    </li>
                </ul>

                <div class="row">
                    <div class="text-center">
                        <a class="text-decoration-none"
                           v-bind:href="'tel:' + getBusinessPhone(true)">
                            <button class="w-50 btn btn-lg btn-outline-success"
                                    type="button">
                                <svg class="bi">
                                    <use xlink:href="#phone"/>
                                </svg>

                                Call us at {{ getBusinessPhone(false) }}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bi {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    vertical-align: -.125em;
    overflow: visible;
}

.card {
    border-color: #212529 !important;
}

.card-header {
    background-color: #212529;
    color: #FFFFFF;
}
</style>