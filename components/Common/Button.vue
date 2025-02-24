<template>
    <button
        class="text-center"
        :class="buttonStyles"
    >
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    variant: { 
        type: String, 
        default: 'solid', // 'solid', 'transparent', 'outline', //pill
        validator(value) {
            return ['solid', 'transparent', 'outline'].includes(value)
        },
    },
    theme: { 
        type: String, 
        validator(value) {
            return ['red', 'green', 'blue', 'white'].includes(value)
        },
        default: 'blue'
    }, 
})

const buttonStyles = computed(() => {
    let baseClass = `variant-${props.theme}`
    switch (props.variant) {
    case 'solid':
        return `${baseClass} is-solid`
    case 'transparent':
        return `${baseClass} is-transparent`
    case 'outline':
        return `${baseClass} is-outline`
    default:
        return baseClass
    }
})
</script>

<style scoped>
button {
    @apply px-4 py-2 rounded-md font-semibold;
    &.is-solid {
        &.variant-blue {
            @apply bg-blue-500 text-white border-2 border-blue-500  transition-colors duration-300 hover:text-blue-600 hover:bg-white;
        }
    }
    &.is-outline {
        &.variant-blue {
            @apply text-blue-500 border-2 border-blue-500;
        }
    }

    &[disabled]{
        @apply cursor-not-allowed opacity-50;
    }
}
</style>