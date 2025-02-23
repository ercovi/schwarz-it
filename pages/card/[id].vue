<template>
    <div class="">
        <h1>Card</h1>
        <div v-if="card">
            <h2>{{ card.name }}</h2>
            <p>{{ card.manaCost }}</p>
            <p>{{ card.type }}</p>
        </div>
        {{ routeId }}
        {{ `${API_URL}/${routeId}` }}
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
const API_URL = config.public.apiUrl;
const route = useRoute()
const routeId = route.params.id

const cardsStore = useCardsStore()
const storedCard = cardsStore.getCardById(routeId)
console.log({ storedCard })
const shouldFetch = !storedCard
console.log({ shouldFetch })

const key = `cards-${routeId}`

const { data: fetchedCard } = useAsyncData(
  key,
  () => $fetch(`${API_URL}/${routeId}`),
  { enabled: shouldFetch }
)

// It returns the fetched card or fetched card from api
const card = computed(() => {
  return cardsStore.getCardById(routeId) || fetchedCard.value?.card
})
console.log('card', card.value)

// If the card is fetched, we push it to the store
watch(fetchedCard, (newCard) => {
  if (newCard && !cardsStore.getCardById(routeId)) {
    cardsStore.pushCards([newCard])
  }
})
</script>