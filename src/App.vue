<template>
    <router-view/>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheApp",
    watch: {
        '$route' (to) {
            document.title = 'Biker Training - ' + to.meta.label || 'Biker Training'
        }
    },
});
</script>

<style lang="scss">
// Import Main styles for this application
@import "assets/scss/style";
</style>