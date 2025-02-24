<template>
    <div class="">
        <h1>Card</h1>
        <div v-if="card">
            <h2>{{ card.name }}</h2>
            <p>{{ card.manaCost }}</p>
            <p>{{ card.type }}</p>
        </div>

        <CommonButton
          v-if="!isInCollection"
          @click="addToCollection"
        >
            Add to Collection
        </CommonButton>
        <CommonButton
            v-else  
            theme="red"
            @click="removeFromCollection"
        >
            Remove from Collection
        </CommonButton>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
const API_URL = config.public.apiUrl;

const {params} = useRoute();
const routeId = params.id;

const cardsStore = useCardsStore();

const { data: card, } = useFetch(`${routeId}`, {
  baseURL: `${API_URL}/`,
  //Before requesting, check if the card is already in the store.
  getCachedData: () => {
    return cardsStore.getCardById(routeId) || null;
  },
  //Once the data is obtained from the API, the card is stored in the store.
  transform: (cardFromApi) => {
    if (!cardsStore.getCardById(routeId)) {
      cardsStore.pushCards([cardFromApi?.card]);
    }
    return cardFromApi?.card;
  }
});

const collectionStore = useCollectionStore();

const isInCollection = computed(() => {
  return collectionStore.cards.some(c => c.id === card.value?.id);
});

const addToCollection = () => {
    console.log('clicked add', card.value, collectionStore)
  if (card.value) {
    collectionStore.addCardToCollection(card.value);
  }
};

const removeFromCollection = () => {
  if (card.value) {
    collectionStore.removeCardFromCollection(card.value);
  }
};
</script>