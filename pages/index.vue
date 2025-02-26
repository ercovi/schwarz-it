<script setup>
const page = ref(1); 
const pageSize = 12;
const cardsStore = useCardsStore()
const { getCards } = useCardsAPI();


const { data, pending, error, refresh } = getCards(page, pageSize)

watch(data, (newData) => {
  if (newData && newData.cards) {
    cardsStore.pushCards(newData.cards)
  }
}, { immediate: true });

useHead({
    title: `Cards Home Page - Page ${page.value}`,
    meta: [
        { name: 'description', content: 'Explore the cards and collect them.' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `Cards - Page ${page.value}` },
        { property: 'og:description', content: 'Explore the cards and collect them.' },
        { property: 'og:image', content: '/card.webp' },
    ]
})
</script>

<template>
    <section class="flex flex-col gap-y-4 md:gap-y-8">
        <CommonLoader v-if="pending" />
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
