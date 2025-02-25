<template>
    <section class="">
        <h1 v-if="card?.name" class="text-5xl font-semibold text-center">{{ card?.name }}</h1>

        <section
            class="p-8 mt-4 bg-white rounded-lg shadow-md"
        >
            <article
                id="card-info"
                class="grid items-center grid-cols-2 mx-auto"
            >
                <img
                    :src="card?.imageUrl"
                    :alt="name"
                    loading="lazy" 
                    class="w-3/5 mx-auto aspect-card "
                >

                <div>
                    <CardInfoIntroduction 
                        :name="card?.name"
                        :artist="card?.artist"
                        :type="card?.type"
                        :rarity="card?.rarity"
                        :description="card?.text"
                    />
                    <div
                        id="card-stats"
                        class="bg-gray-200"
                    >   
                        <CardInfoDefinitionList
                            :items="powers"
                        />
                    </div>
                    <dl v-if="card?.legalities.length > 0">
                        <template
                            v-for="({format, legality}, index) in card?.legalities"
                            :key="`legality-${index}`"
                        >
                            <dt>{{format}}</dt>
                            <dd>{{legality}}</dd>
                        </template>
                    </dl>
                </div>


            </article>

            <CollectionToggleCard 
                :card
            />

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

</script>