<script lang="ts"
        setup>
const props = defineProps({
    error: <any>Object
});

const { getBusinessPhone } = useUtils();

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
    <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-3 fw-bold">{{ props.error['statusCode'] }}</h1>

        <!-- Start 403 -->
        <div v-if="props.error['statusCode'] === 403"
             class="col-lg-6 mx-auto">
            <p class="lead mb-4">{{ title }}</p>
            <p class="text-muted">You do not have access to that resource.</p>
            <p class="text-muted">
                <NuxtLink to="/">Click here</NuxtLink>
                to go back to the main page.
            </p>
        </div>
        <!-- End 403 -->

        <!-- Start 404 -->
        <div v-if="props.error['statusCode'] === 404"
             class="col-lg-6 mx-auto">
            <p class="lead mb-4">Oops! You're lost.</p>
            <p class="text-muted">The page you are looking for was not found.</p>
            <p class="text-muted">
                <NuxtLink to="/">Click here</NuxtLink>
                to go back to the main page.
            </p>
        </div>
        <!-- End 404 -->

        <!-- Start 408 -->
        <div v-if="props.error['statusCode'] === 408"
             class="col-lg-6 mx-auto">
            <p class="lead mb-4">Request Timeout.</p>
            <p class="text-muted">The page you are looking for took too long to load.</p>
            <p class="text-muted">Please give us a call at <a class="text-muted text-decoration-none"
                                                              v-bind:href="'tel:' + getBusinessPhone(true)">
                {{ getBusinessPhone(false) }}</a>
            </p>
            <p class="text-muted">
                <NuxtLink to="/">Click here</NuxtLink>
                to go back to the main page.
            </p>
        </div>
        <!-- End 408 -->

        <!-- Start 500 -->
        <div v-if="props.error['statusCode'] === 500"
             class="col-lg-6 mx-auto">
            <p class="lead mb-4">Houston, we have a problem!</p>
            <p class="text-muted">The page you are looking for is temporarily unavailable.</p>
            <p class="text-muted">Please give us a call at <a class="text-muted text-decoration-none"
                                                              v-bind:href="'tel:' + getBusinessPhone(true)">
                {{ getBusinessPhone(false) }}</a>
            </p>
            <p class="text-muted">
                <NuxtLink to="/">Click here</NuxtLink>
                to go back to the main page.
            </p>
        </div>
        <!-- End 500 -->
    </div>
</template>

<style scoped>

</style>