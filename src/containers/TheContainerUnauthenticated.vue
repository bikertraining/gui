<template>
    <page-loading :is-active="loadingState.isActive"/>

    <div class="vh-100 d-flex flex-column overflow-hidden" v-if="globalSidebar.toggle">
        <TheHeader/>

        <div class="flex-fill d-flex flex-row overflow-auto">
            <TheSidebar/>

            <main class="flex-fill overflow-auto bg-light">
                <div class="px-3">
                    <alert-banner/>

                    <router-view/>

                    <TheFooter/>
                </div>
            </main>
        </div>
    </div>

    <div class="d-flex flex-column overflow-hidden" v-if="!globalSidebar.toggle">
        <TheHeader/>

        <div class="flex-fill d-flex flex-row overflow-auto">
            <TheSidebar/>

            <main class="flex-fill overflow-auto bg-light">
                <div class="px-3 mt-3">
                    <alert-banner/>

                    <router-view/>

                    <TheFooter/>
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { AlertBanner, PageLoading } from "@/components";
import { usePageLoading, useSidebar } from "@/composables";
import { TheFooter, TheHeader, TheSidebar } from "@/containers";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    name: "TheContainerUnauthenticated",
    components: {
        AlertBanner,
        PageLoading,
        TheHeader,
        TheFooter,
        TheSidebar
    },
    setup() {
        const { loadingState } = usePageLoading();

        const { globalSidebar, resizeSidebar } = useSidebar();

        onMounted(() => {
            resizeSidebar(document.documentElement.clientWidth > 768);
        });

        window.addEventListener('resize', () => {
            resizeSidebar(document.documentElement.clientWidth > 768);
        });

        return {
            loadingState,
            globalSidebar
        };
    }
});
</script>
