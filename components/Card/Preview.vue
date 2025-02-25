<template>
    <div
        class="relative p-3 py-6 bg-white rounded-lg shadow-lg md:py-3"
    >
        <NuxtLink 
            class="flex flex-col items-center gap-y-3"
            :to="`/card/${id}`"
        >
            <!-- TODO: Conver in NuxtImages ? -->
            <img
                :src="imageUrl"
                :alt="name"
                loading="lazy" 
                class="w-11/12 mx-auto md:w-full aspect-card"
                width="600px"
                height="500px"
            >
            <div class="flex flex-col items-center">
                <h2 class="text-2xl font-bold leading-tight text-center md:leading-normal md:text-2xl">{{ name }}</h2>
                <span class="text-base md:text-lg text-slate-400">{{ type }}</span>
                <span class="text-sm md:text-xl">Mana Cost: {{ manaCost }}</span>
            </div>
        </NuxtLink>
        <CardIconsHeart
            class="absolute top-5 right-5 md:top-2 md:right-2"
            :card="{ id, name, manaCost, type, imageUrl }"
        />
    </div>
    
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