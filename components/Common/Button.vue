<template>
    <button
        class="text-center"
        :class="buttonStyles"
        v-bind="$attrs"
        :ariaLabel
    >
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    variant: { 
        type: String, 
        default: 'solid',
        validator(value) {
            return ['solid', 'outline'].includes(value)
        },
    },
    theme: { 
        type: String, 
        validator(value) {
            return ['red', 'blue',].includes(value)
        },
        default: 'blue'
    }, 
    ariaLabel: { 
        type: String,
        default: null
    }
})

const buttonStyles = computed(() => {
    let baseClass = `variant-${props.theme}`
    switch (props.variant) {
    case 'solid':
        return `${baseClass} is-solid`
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
        &.variant-red {
            @apply bg-red-500 text-white border-2 border-red-500  transition-colors duration-300 hover:text-red-600 hover:bg-white;
        }
    }
    &.is-outline {
        &.variant-blue {
            @apply text-blue-500 border-2 border-blue-500;
        }
        &.variant-red {
            @apply text-red-500 border-2 border-red-500;
        }
    }

    &[disabled]{
        @apply cursor-not-allowed opacity-50;
    }
}
</style>