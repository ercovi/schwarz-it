<script setup>
useHead({
    title: 'Cards Collections APP - Schawrz',
    meta: [
        {
            name: 'robots',
            content: 'noindex, nofollow',
        },
    ],
    htmlAttrs: {
        lang: 'en'
    }
});
</script>
<template>
    <Body class="bg-slate-400">
        <NuxtLoadingIndicator
            :throttle="200"
            :height="3"
            :color="'#a2a2a2'"
        />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </Body>
</template>