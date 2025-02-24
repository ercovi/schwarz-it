<template>
    <section 
        class="flex justify-between"
    >
        <CommonButton 
            :disabled="page <= 1"
            @click="decrementPage"
        >
            Previous
        </CommonButton>
        <CommonButton
            @click="incrementPage"
        >
            Next
        </CommonButton>
    </section>
</template>

<script setup>
const props = defineProps({
    page: {
        type: Number,
        required: true,
    }
})

const emit = defineEmits(['update:page']);

const decrementPage = () => {
  if (props.page > 1) {
    emit('update:page', props.page - 1);
  }
};

const incrementPage = () => {
  emit('update:page', props.page + 1);
};
</script>
