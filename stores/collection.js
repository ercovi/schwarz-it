import { defineStore } from 'pinia'

export const useCollectionStore = defineStore('collection', {
    state: () => ({
        cards: []
    }),
    actions: {
        addCardToCollection(card) {
            this.cards.push(card);
            console.log(this.cards)
        },
        removeCardFromCollection(card) {
            this.cards = this.cards.filter(c => c.id !== card.id);
            console.log(this.cards)
        },
    },
})
