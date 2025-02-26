<template>
    <header class="sticky top-0 z-10 flex items-center justify-center w-full h-16 bg-white border-b border-gray-300 shadow-md">
        <nav 
            v-if="menuItems.length > 0"
            aria-label="Main navigation"
        >
            <ul class="flex gap-x-8" role="menubar">
                <li
                    v-for="{ name, path, id } in menuItems"
                    :key="id"
                    role="none"
                >
                    <NuxtLink
                        :to="path"
                        class="text-xl font-bold"
                        role="menuitem"
                        :aria-current="route?.path === path ? 'page' : null"
                    >
                        {{ name }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const route = useRoute();
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