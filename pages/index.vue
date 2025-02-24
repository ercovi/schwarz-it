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
    <div v-else class="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        <CardPreview 
            v-for="{id, imageUrl, name, manaCost, type} in data?.cards"
            :id
            :key="id"
            class="col-span-1 card"
            :name
            :manaCost
            :type
            :imageUrl
        />
    </div>
    
    <CommonPagination v-model:page="page" />
  </section>
</template>
