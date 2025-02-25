<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <dl v-if="items.length" class="grid grid-cols-[70px_auto]">
        <template 
            v-for="({label, value}, index) in items" 
            :key="`list-${label}-${value}-${index}`"
        >
            <dt class="font-semibold">{{ label }}</dt>
            <dd>{{ value }}</dd>
        </template>
  </dl>
</template>