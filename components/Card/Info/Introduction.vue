<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    artist: String,
    type: String,
    rarity: String,
    description: String,
})

const types = computed(() => [
  { label: 'Type', value: props.type },
  { label: 'Rarity', value: props.rarity }
]);

</script>

<template>
    <div class="flex flex-col gap-y-3">
        <header>
            <h2 class="text-2xl font-semibold">
                {{ name }}
            </h2>
            <h3 
                v-if="artist"
                class="text-base italic text-gray-500">
                By {{artist}}
            </h3>
        </header>
          
        <CardInfoDefinitionList 
            :items="types"
        />
    </div>
</template>