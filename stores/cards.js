import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', {
    state: () => ({
        cards: []
    }),
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
