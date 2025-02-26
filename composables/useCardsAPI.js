export const useCardsAPI = () => {
    const config = useRuntimeConfig();
    const API_URL = config.public.apiUrl;
    const cardsStore = useCardsStore();

    const getCardById = (id) => {
        return useFetch(`${id}`, {
            baseURL: `${API_URL}/`,
            //Before requesting, check if the card is already in the store.
            getCachedData: () => cardsStore.getCardById(id) || null,
            //Once the data is obtained from the API, the card is stored in the store.
            transform: (cardFromApi) => {
                if (!cardsStore.getCardById(id)) {
                    cardsStore.pushCards([cardFromApi?.card]);
                }
                return cardFromApi?.card;
            }
        });
    };

    const getCards = (page, pageSize) => {
        return useAsyncData(`products-page-${page.value}`,
            () => $fetch(API_URL, {
                params: { page: page.value, pageSize },
            }),
            { watch: [page], retry: 3 }
        );
    };

    return {getCardById, getCards};
}