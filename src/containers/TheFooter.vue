<template>
    <footer class="pt-3 mb-3 d-flex justify-content-between">
        <span>
            &copy; {{ new Date().getFullYear() }} <a class="text-decoration-none"
                                                     href="https://bikertraining.net"
                                                     target="_blank">BikerTraining LLC</a>
        </span>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheFooter"
});
</script>