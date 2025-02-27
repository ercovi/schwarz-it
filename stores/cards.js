import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', {
    state: () => ({
        cards: []
    }),
    getters: {
        getCardsByPage: (state) => (page) => {
            return state.cards.filter(card => card.page === page);
        }
    },
    actions: {
        pushCards(newCards) {
            const existingIds = new Set(this.cards.map(card => card.id));
            newCards.forEach(card => {
                if (!existingIds.has(card.id)) {
                    this.cards.push(card);
                }
            });
        },
        getCardById(id) {
            return this.cards.find(card => card.id === id);
        }
    },
})
