<template>
    <NuxtLink 
        class="flex flex-col items-center"
        :to="`/card/${id}`"
    >
        <img
            :src="imageUrl"
            :alt="name"
            loading="lazy" 
            class="aspect-card w-full px-3"
        >
        <h2>{{ name }}</h2>
        <p>{{ manaCost }}</p>
        <p>{{ type }}</p>
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