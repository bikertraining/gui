<template>
    <div class="mb-2">
        <h6 class="fw-bold">{{ name }}</h6>

        <div v-if="value && !ahref">
            {{ text_left }} {{ value }} {{ text_right }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "StaticData",
    props: {
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
    }
});
</script>