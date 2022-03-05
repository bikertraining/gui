<template>
    <page-loading :is-active="loadingState.isActive"/>

    <alert-banner/>

    <router-view/>
</template>

<script lang="ts">
import { AlertBanner, PageLoading } from "@/components";
import { usePageLoading } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheContainerPages",
    components: {
        AlertBanner,
        PageLoading
    },
    setup() {
        const { loadingState } = usePageLoading();

        return {
            loadingState
        };
    }
});
</script>