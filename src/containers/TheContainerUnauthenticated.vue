<template>
    <page-loading :is-active="loadingState.isActive"/>

    <TheHeader/>

    <div class="container-fluid mb-3">
        <router-view/>
    </div>

    <TheFooter/>
</template>

<script lang="ts">
import { PageLoading } from "@/components";
import { usePageLoading } from "@/composables";
import { TheFooter, TheHeader } from "@/containers";
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheContainerUnauthenticated",
    components: {
        PageLoading,
        TheHeader,
        TheFooter
    },
    setup() {
        const { loadingState } = usePageLoading();

        return {
            loadingState
        };
    }
});
</script>