// @vitest-environment nuxt
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CardImage from '@/components/Card/Image.vue';

describe('CardImage.vue', () => {
    it('renders the image correctly', () => {
        const wrapper = mount(CardImage, {
        props: {
            imageUrl: 'https://localhost:3000/card.webp',
            name: "Ancestor's Chosen",
        },
        });

        const img = wrapper.find('img');
        expect(img.exists()).toBe(true);
        expect(img.attributes('src')).toBe('https://localhost:3000/card.webp');
        expect(img.attributes('alt')).toBe("Ancestor's Chosen - Card Image");
    });
});
