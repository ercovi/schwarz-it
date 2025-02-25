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
            console.log(this.cards)
        },
        removeCardFromCollection(id) {
            this.cards = this.cards.filter(c => c.id !== id);
            console.log(this.cards)
        },
        toggleCardInCollection(card) {
            this.isInCollection(card.id)
                ? this.removeCardFromCollection(card.id)
                : this.addCardToCollection(card);
        }
    },
})
