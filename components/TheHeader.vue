<template>
    <header class="sticky top-0 z-10 flex items-center justify-center w-full h-16 bg-white border-b border-gray-300">
        <nav 
            v-if="menuItems.length > 0"
            class="flex gap-x-8"
        >
            <NuxtLink
                v-for="{name, path, id} in menuItems"
                :key="id"
                :to="path"
                class="text-xl font-bold"
            >
                {{name}}
            </NuxtLink>
        </nav>
    </header>
</template>

<script setup>
const menuItems = ref([
    { name: 'Home', path: '/', id: useId() },
    { name: 'Collection', path: '/collection', id: useId() },
]);
</script>

<style scoped>
nav:has(.router-link-exact-active) a:not(.router-link-exact-active) {
    @apply opacity-50 hover:opacity-100 transition-opacity duration-300;
}
</style>