<template>
    <section class="">
        <h1 class="text-3xl font-semibold text-center md:text-5xl">{{ card?.name }}</h1>

        <main
            class="max-w-4xl px-3 py-6 mx-auto mt-4 bg-white rounded-lg shadow-md md:p-8"
        >
            <article
                id="card-info"
                class="grid grid-cols-1 mx-auto md:grid-cols-2 gap-x-4"
            >
                <figure class="flex flex-col gap-y-4">
                    <CardImage
                        :name="card?.name"
                        :imageUrl="card?.imageUrl"
                        class="w-3/4 mx-auto aspect-card"
                    />
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
                        class="p-3"
                    />
                </div>
                
            </article>
        </main>
    </section>
</template>

<script setup>
const {params} = useRoute();
const routeId = params.id;
const { getCardById } = useCardsAPI();
const { data: card } = getCardById(routeId);

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


useHead({
    title: `${card.value?.name} - Detailed Page`,
    meta: [
        { name: 'description', content: card.value?.text || 'Card details' },
        { property: 'og:title', content: card.value?.name },
        { property: 'og:description', content: card.value?.text || 'Card details' },
        { property: 'og:image', content: card.value?.imageUrl },
    ]
});

</script>