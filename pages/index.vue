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
    <section class="flex flex-col gap-y-4 md:gap-y-8">
        <CommonLoader v-if="pending"  />
        <div v-if="error">
            Failed to load cards. 
            <CommonButton 
                @click="refresh()"
            >
                Retry
            </CommonButton>
        </div>
        <template v-else>
            <CommonPagination 
                v-model:page="page" 
            />
            <CardGrid>
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
            </CardGrid>
            
            <CommonPagination 
                v-if="!pending"
                v-model:page="page" 
            />
        </template>
    </section>
</template>
