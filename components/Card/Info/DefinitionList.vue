<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  isWide: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
    <dl 
        v-if="items.length" 
        class="grid grid-cols-2"
        :class="{
            ' lg:grid-cols-[110px_auto_110px_auto]': isWide,
            'md:grid-cols-1 lg:grid-cols-[175px_auto]': !isWide
        }"
    >
        <template 
            v-for="({label, value}, index) in items" 
            :key="`list-${label}-${value}-${index}`"
        >
            <dt class="font-semibold">{{ label }}</dt>
            <dd class="text-center md:text-left">{{ value }}</dd>
        </template>
    </dl>
</template>
