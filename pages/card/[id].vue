<template>
    <section class="">
        <h1 v-if="card?.name" class="text-3xl font-semibold text-center md:text-5xl">{{ card?.name }}</h1>

        <section
            class="px-3 py-6 mt-4 bg-white rounded-lg shadow-md md:p-8"
        >
            <article
                id="card-info"
                class="grid grid-cols-1 mx-auto md:grid-cols-2 gap-x-4"
            >
                <figure class="flex flex-col gap-y-4">
                    <img
                        :src="card?.imageUrl"
                        :alt="name"
                        loading="lazy" 
                        class="w-3/4 mx-auto aspect-card"
                    >
                    <figcaption class="px-2 text-balance">
                        {{ card?.text }}
                    </figcaption>
                    <CollectionToggleCard 
                        :card
                    />
                </figure>

                <div>
                    <CardInfoIntroduction 
                        :name="card?.name"
                        :artist="card?.artist"
                        :type="card?.type"
                        :rarity="card?.rarity"
                        :description="card?.text"
                        class="p-3"
                    />
                    <div
                        id="card-stats"
                        class="p-3 bg-gray-200 rounded-lg"
                    >   
                        <CardInfoDefinitionList
                            :items="powers"
                            :isWide="true"
                        />
                    </div>
                    <CardInfoDefinitionList
                        :items="legalities"
                        :isWide="true"
                        class="p-3"
                    />
                    
                </div>


            </article>
        </section>
    </section>
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
console.log('card', card.value)
const powers = computed(() => [
  { label: 'Mana Cost', value: card.value.manaCost },
  { label: 'Power', value: card.value.power },
  { label: 'Cmc', value: card.value.cmc },
  { label: 'Toughness', value: card.value.toughness }
]);

const legalities = computed(() => {
  return card.value?.legalities?.length
    ? card.value.legalities.map(({ format, legality }) => ({ label: format, value: legality }))
    : [];
});

</script>