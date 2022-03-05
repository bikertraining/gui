<template>
    <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-3 fw-bold">403</h1>

        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Access Denied.</p>
            <p class="text-muted">You do not have access to that resource.</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheError403"
});
</script>