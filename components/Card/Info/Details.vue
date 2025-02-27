<script setup>
defineProps({
    name: String,
    type: String,
    manaCost: String,
});
</script>
<template>
    <div class="flex flex-col items-center">
        <h2 class="text-2xl font-bold leading-tight text-center md:leading-normal">{{ name }}</h2>
        <span card-type class="text-base md:text-lg text-slate-400">{{ type }}</span>
        <span mana-cost class="text-sm md:text-xl">Mana Cost: {{ manaCost }}</span>
    </div>
</template>
