<template>
    <div class="">
        <NuxtLoadingIndicator
            :throttle="200"
            :height="3"
            :color="'#a2a2a2'"
        />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
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

});
</script>
