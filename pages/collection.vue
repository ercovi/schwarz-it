<template>
    <div>   
        <template v-if="cards.length === 0">
            <p>No cards in the collection</p>
        </template>
        <template v-else>
            <span
                v-for="{id, name} in cards"
                :key="id"
            >
                {{ name }}
            </span>
        </template>
    </div>
</template>

<script setup>
const {cards} = useCollectionStore();
</script>
