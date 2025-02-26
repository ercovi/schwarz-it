<template>
    <Body class="bg-slate-300">
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
