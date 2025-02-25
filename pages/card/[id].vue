<template>
    <div class="">
        <h1 class="text-4xl font-semibold text-center">{{ card?.name }}</h1>

        <div
            class="p-4 mt-4 bg-white rounded-lg shadow-md"
        >
            <div v-if="card">
                <h2>{{ card.name }}</h2>
                <p>{{ card.manaCost }}</p>
                <p>{{ card.type }}</p>
            </div>

            <CollectionToggleCard 
                :card
            />

        </div>
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

</script>