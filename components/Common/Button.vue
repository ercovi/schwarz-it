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