<template>
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="transition-all duration-300 scale-100 hover:scale-125"
        :class="{
            'fill-red-500 hover:fill-red-200': isInCollection,
            'hidden fill-transparent hover:fill-red-500': !isInCollection,
        }"
        stroke="black"
        stroke-width="2" 
        stroke-linecap="round"
        stroke-linejoin="round"
        @click="toggleCardInCollection"
    >
        <path 
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        />
    </svg>
</template>

<script setup>
const props = defineProps({ 
    card: {
        type: Object,
        required: true,
    } 
});
const collectionStore = useCollectionStore();

const isInCollection = computed(() => collectionStore.isInCollection(props.card.id));

const toggleCardInCollection = () => {
    collectionStore.toggleCardInCollection(props.card);
};
</script>
