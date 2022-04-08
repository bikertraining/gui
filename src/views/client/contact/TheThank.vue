<template>
    <div class="py-5"
         style="min-height: calc(100vh - 270px) !important;">
        <p>Thank you for contacting us!</p>

        <p>We will reply to your message as soon as we can.</p>

        In the meantime, our
        <router-link :to="{ name: 'client:faq' }"
                     class="text-decoration-none">FAQs
        </router-link>
        can answer most questions.
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheThank"
});
</script>