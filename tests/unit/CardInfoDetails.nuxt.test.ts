// @vitest-environment nuxt
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CardInfoDetails from '@/components/Card/Info/Details.vue';

describe('CardInfoDetails.vue', () => {
    it('renders the card details correctly', () => {
        const wrapper = mount(CardInfoDetails, {
        props: {
            name: "Ancestor's Chosen",
            type: 'Creature — Human Cleric',
            manaCost: '{5}{W}{W}'
        },
        });

        // Card Name
        const h2 = wrapper.find('h2');
        expect(h2.exists()).toBe(true);
        expect(h2.text()).toBe("Ancestor's Chosen");

        // Card Type
        const typeSpan = wrapper.find('[card-type]');
        expect(typeSpan.exists()).toBe(true);
        expect(typeSpan.text()).toBe("Creature — Human Cleric");

        // Card Mana Cost
        const manaCostSpan = wrapper.find('[mana-cost]');
        expect(manaCostSpan.exists()).toBe(true);
        expect(manaCostSpan.text()).toBe("Mana Cost: {5}{W}{W}");
    });
});
