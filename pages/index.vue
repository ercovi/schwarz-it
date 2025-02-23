<script setup>
const config = useRuntimeConfig();
const API_URL = config.public.apiUrl;
const page = ref(1); 
const pageSize = 12;

const cardsStore = useCardsStore()

const { data, pending, error, refresh } = useAsyncData(
    `products-page-${page.value}`,
    () => $fetch(API_URL, {
        params: {
            page: page.value,
            pageSize,
        } 
    }),
    { watch: [page], retry: 3 }
);

watch(data, (newData) => {
  if (newData && newData.cards) {
    cardsStore.pushCards(newData.cards)
  }
}, { immediate: true });
</script>

<template>
  <section>
    <CommonLoader v-if="pending"  />
    <div v-if="error">Failed to load cards. <button @click="refresh()">Retry</button></div>
    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-2 py-8">
        <CardPreview 
            v-for="{id, imageUrl, name, manaCost, type} in data?.cards"
            :key="id"
            class="card col-span-1"
            :id
            :name
            :manaCost
            :type
            :imageUrl
        />
    </div>
    
    <div class="flex justify-between mt-4">
      <button @click="page--" :disabled="page <= 1">Previous</button>
      <button @click="page++">Next</button>
    </div>
  </section>
</template>
