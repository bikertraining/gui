<template>
    <page-loading :is-active="loadingState.isActive"/>

    <TheHeaderAuthenticated/>

    <alert-banner/>

    <div class="container-fluid mb-3">
        <router-view/>
    </div>
</template>

<script lang="ts">
import { AlertBanner, PageLoading } from "@/components";
import { usePageLoading } from "@/composables";
import TheHeaderAuthenticated from "@/containers/TheHeaderAuthenticated.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheContainerAuthenticated",
    components: {
        AlertBanner,
        PageLoading,
        TheHeaderAuthenticated
    },
    setup() {
        const { loadingState } = usePageLoading();

        return {
            loadingState
        };
    }
});
</script>
