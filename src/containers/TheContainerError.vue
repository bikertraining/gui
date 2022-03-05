<template>
    <page-loading :is-active="loadingState.isActive"/>

    <router-view/>
</template>

<script lang="ts">
import { PageLoading } from "@/components";
import { usePageLoading } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheContainerPages",
    components: {
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