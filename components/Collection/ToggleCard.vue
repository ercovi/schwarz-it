<template>
    <CommonButton
        :theme="isInCollection ? 'red' : 'blue'"
        @click="toggleCard"
    >
        {{buttonAction}}
    </CommonButton>
</template>
<script setup>
const props = defineProps({
    card: {
        type: Object,
        required: true,
    }
});

const collectionStore = useCollectionStore();

const isInCollection = computed(() => collectionStore.isInCollection(props?.card?.id));
const buttonAction = computed(() => `${isInCollection.value ? 'Remove from' : 'Add to'} Collection`);

const toggleCard = () => collectionStore.toggleCardInCollection(props?.card);
</script>