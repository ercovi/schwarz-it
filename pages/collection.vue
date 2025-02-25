<template>
    <div>   
        <template v-if="cards.length === 0">
            <p>No cards in the collection</p>
        </template>
        <CardGrid v-else>            
            <CardPreview 
                v-for="{id, imageUrl, name, manaCost, type} in cards"
                :id
                :key="id"
                class="col-span-1 card"
                :name
                :manaCost
                :type
                :imageUrl
            />
        </CardGrid>
    </div>
</template>

<script setup>
const {cards} = useCollectionStore();
</script>
