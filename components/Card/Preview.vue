<template>
    <article
        class="relative p-3 py-6 bg-white rounded-lg shadow-lg preview-card md:py-3"
    >
        <NuxtLink 
            class="flex flex-col items-center gap-y-3"
            :to="`/card/${id}`"
            :aria-label="`View detailed page of ${name} card`"
        >
            <CardImage
                :imageUrl
                :name
            />
            <CardInfoDetails 
                :manaCost
                :type
                :name
            />
        </NuxtLink>
        <CardIconsHeart
            class="absolute top-5 right-5 md:top-2 md:right-2"
            :card="{ id, name, manaCost, type, imageUrl }"
        />
    </article>
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
    imageUrl: String,
});
</script>