<template>
    <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-3 fw-bold">408</h1>

        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Request Timeout.</p>
            <p class="text-muted">The page you are looking for took too long to load.</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheError408"
});
</script>