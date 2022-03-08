<template>
    <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-3 fw-bold">500</h1>

        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Houston, we have a problem!</p>
            <p class="text-muted">The page you are looking for is temporarily unavailable.</p>
            <p class="text-muted">Please give us a call at <a class="text-muted text-decoration-none"
                                                              v-bind:href="'tel:' + business_phon.replace(/-/g,'')">{{
                    business_phone
                }}</a></p>
            <p class="text-muted">
                <router-link :to="{ name: 'client:home' }">Click here</router-link>
                to go back to the main page.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "TheError500",
    setup() {
        const business_phone = process.env.VUE_APP_BUSINESS_PHONE;

        return {
            business_phone
        };
    }
});
</script>