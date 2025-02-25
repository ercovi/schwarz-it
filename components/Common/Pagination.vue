<template>
    <section 
        class="flex justify-between p-4 bg-white rounded-lg shadow-lg "
    >
        <CommonButton 
            :disabled="page <= 1"
            :variant="page <= 1 ? 'outline' : 'solid'"
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
