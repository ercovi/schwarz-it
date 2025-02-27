<script setup>
defineProps({
    imageUrl: {
        type: String,
        default: '/card.webp'
    },
    name: String,
});
</script>
<template>
    <img
        :src="imageUrl"
        :alt="`${name} - Card Image`"
        loading="lazy"
        width="600"
        height="500"
    >
</template>