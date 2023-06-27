<script lang="ts"
        setup>
const props = defineProps({
    ahref: {
        type: Object,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    text_left: {
        type: null,
        required: false
    },
    text_right: {
        type: null,
        required: false
    },
    value: {
        type: null,
        required: false
    }
});
</script>

<template>
    <div class="mb-2">
        <h6 class="fw-bold">{{ name }}</h6>

        <div v-if="value && !ahref">
            {{ text_left }} {{ value }} {{ text_right }}
        </div>
    </div>
</template>

<style scoped>

</style>