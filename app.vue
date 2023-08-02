<script lang="ts"
        setup>

</script>

<template>
    <NuxtLayout>
        <PageLoading/>

        <NuxtPage/>
    </NuxtLayout>
</template>

<style lang="css">
html, body {
    height: 100%;
}

body {
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
}

main {
    flex-grow: 1;
    height: 100%;
}
</style>