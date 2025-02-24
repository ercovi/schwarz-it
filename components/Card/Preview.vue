<template>
    <NuxtLink 
        class="flex flex-col items-center p-3 transition-transform duration-300 bg-white rounded-lg shadow-lg gap-y-3 hover:-translate-y-3"
        :to="`/card/${id}`"
    >
        <!-- TODO: Conver in NuxtImages ? -->
        <img
            :src="imageUrl"
            :alt="name"
            loading="lazy" 
            class="w-full aspect-card"
        >
        <div class="flex flex-col items-center">
            <h2 class="text-2xl font-bold">{{ name }}</h2>
            <span class="text-xl">{{ manaCost }}</span>
            <span class="text-lg text-slate-400">{{ type }}</span>
        </div>
    </NuxtLink>
</template>

<script setup>
defineProps({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    manaCost: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        default: '/card.webp',
    },
});
</script>