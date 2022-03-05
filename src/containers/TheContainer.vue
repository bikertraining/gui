<template>
    <page-loading :is-active="loadingState.isActive"/>

    <div class="vh-100 d-flex flex-column overflow-hidden">
        <div class="flex-fill d-flex flex-row overflow-auto">
            <main class="flex-fill overflow-auto bg-light">
                <div class="px-3 mt-3">
                    <alert-banner/>

                    <router-view/>

                    <footer class="pt-3 mb-3 me-3 d-flex justify-content-end">
                        <router-link :to="{ name: 'pages:logout' }"
                                     class="text-decoration-none text-danger">
                            <span class="pe-2">
                                <font-awesome-icon :icon="['fas', 'right-from-bracket']"/>
                            </span> Logout
                        </router-link>
                    </footer>
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { AlertBanner, PageLoading } from "@/components";
import { usePageLoading } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheContainer",
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
