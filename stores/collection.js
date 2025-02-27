import { defineStore } from 'pinia'

export const useCollectionStore = defineStore('collection', {
    state: () => ({
        cards: []
    }),
    getters: {
        isInCollection: (state) => (id) => state.cards.some(card => card.id === id)
    },
    actions: {
        addCardToCollection(card) {
            this.cards.push(card);
        },
        removeCardFromCollection(id) {
            this.cards = this.cards.filter(c => c.id !== id);
        },
        toggleCardInCollection(card) {
            this.isInCollection(card.id)
                ? this.removeCardFromCollection(card.id)
                : this.addCardToCollection(card);
        }
    },
})
