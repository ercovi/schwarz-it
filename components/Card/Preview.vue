<template>
    <div
        class="relative p-3 bg-white rounded-lg shadow-lg"
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
                class="w-full aspect-card"
                width="600px"
                height="500px"
            >
            <!-- <NuxtImg
                :src="imageUrl"
                placeholder="/card.webp"
                :alt="`${name} card image`"
                loading="lazy" 
                class="w-full aspect-card"
                width="600px"
                height="500px"
            /> -->
            <div class="flex flex-col items-center">
                <h2 class="text-2xl font-bold">{{ name }}</h2>
                <span class="text-xl">Mana Cost: {{ manaCost }}</span>
                <span class="text-lg text-slate-400">{{ type }}</span>
            </div>
        </NuxtLink>
        <CardIconsHeart
            class="absolute top-2 right-2"
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