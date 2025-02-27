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
const label = computed(() => `Click to ${isInCollection.value ? 'remove' : 'add'} ${props.card.name} from your collection`);
const toggleCard = () => collectionStore.toggleCardInCollection(props?.card);
</script>
<template>
    <CommonButton
        :theme="isInCollection ? 'red' : 'blue'"
        :ariaLabel="label"
        @click="toggleCard"
    >
        {{buttonAction}}
    </CommonButton>
</template>