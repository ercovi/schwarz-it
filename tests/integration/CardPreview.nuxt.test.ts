import { mount } from "@vue/test-utils";
import {describe, it, expect } from "vitest";
import CardPreview from "@/components/Card/Preview.vue"
import CardImage from "@/components/Card/Image.vue";
import CardInfoDetails from "@/components/Card/Info/Details.vue";
import CardIconsHeart from "@/components/Card/Icons/Heart.vue";

describe("CardPreview.vue", () => {
    it("Shows components correcltly", () => {
        const wrapper = mount(CardPreview, {
            props: {
                id: '5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c',
                name: "Ancestor's Chosen",
                manaCost: '{5}{W}{W}',
                type: 'Creature — Human Cleric',
                imageUrl: 'https://localhost:3000/card.webp',
            },
            global: {
                stubs: {
                    NuxtLink: {
                        template: '<a><slot /></a>',
                    },
                },
                components: {
                    CardImage,
                    CardInfoDetails,
                    CardIconsHeart,
                },
            }
        })
        expect(wrapper.findComponent(CardImage).exists()).toBe(true);
        expect(wrapper.findComponent(CardInfoDetails).exists()).toBe(true);
        expect(wrapper.findComponent(CardIconsHeart).exists()).toBe(true);
  
    })

    it('Enter to card detailed page correctly', async () => {
        const wrapper = mount(CardPreview, {
            props: {
                id: '5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c',
                name: "Ancestor's Chosen",
                manaCost: '{5}{W}{W}',
                type: 'Creature — Human Cleric',
                imageUrl: 'https://localhost:3000/card.webp',
            },
            global: {
                stubs: ['NuxtLink'],
            },
        });
    
        const link = wrapper.findComponent({ name: 'NuxtLink' });
        expect(link.attributes('to')).toBe('/card/5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c');
    })

})