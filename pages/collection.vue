<template>
    <div>   
        <template v-if="cards.length === 0">
            <div class="text-xl text-center">
                <h2>Your collection is empty 🥲</h2>
                <p>Go back to the 
                    <NuxtLink to="/" class="hover:underline" aria-label="Return to the home page">Home Page</NuxtLink>
                </p>

            </div>
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
const collectionStore = useCollectionStore();
const { cards } = storeToRefs(collectionStore);
</script>
