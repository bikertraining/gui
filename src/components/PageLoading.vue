<template>
    <loading v-model:active="loadingState.isActive"/>
</template>

<script lang="ts">
import { usePageLoading } from "@/composables";
import { defineComponent, onMounted } from "vue";
import Loading from "vue-loading-overlay";

export default defineComponent({
    name: "PageLoading",
    props: {
        isActive: {
            type: Boolean,
            required: true
        }
    },
    components: {
        Loading
    },
    setup() {
        const { loadingState } = usePageLoading();

        onMounted(() => {
            loadingState.isActive = false;
        });

        return {
            loadingState
        };
    }
});
</script>

<style lang="scss">
@import "~vue-loading-overlay/dist/vue-loading.css";
</style>