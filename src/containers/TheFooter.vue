<template>
    <footer class="pt-3 mb-3 d-flex justify-content-between">
        &copy; {{ new Date().getFullYear() }} Biker Training LLC
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheFooter"
});
</script>