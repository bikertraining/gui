<script lang="ts"
        setup>
const route = useRoute();

definePageMeta({
    auth: false,
    description: 'Team - Thank You',
    keywords: 'thanks for contacting us, thank you for contacting us message, thank you for contacting us email, contact form thank you message, thank you for contacting us how can we help you, thank you for contacting us message sample, thank you for the call today email, thank you for contacting with us, contact us thank you message, thank you message for contacting us, thank you for contacting us regarding our services, thank you for contacting us business letter, thank you for contacting us email example, thank you for contacting us page, thank you email after business visit, thank you for contacting us email sample, contact us thank you',
    title: 'Team - Thank You'
});

useHead({
    title: `${route.meta['title']}`
});
</script>

<template>
    <div class="py-5"
         style="min-height: calc(100vh - 270px) !important;">
        <p>Thank you for contacting us!</p>

        <p>We will reply to your message as soon as we can.</p>

        In the meantime, our
        <NuxtLink class="text-decoration-none"
                  to="/team/faq">RiderCoach FAQs
        </NuxtLink>
        can answer most questions.
    </div>
</template>

<style scoped>

</style>