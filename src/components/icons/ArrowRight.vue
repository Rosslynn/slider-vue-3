<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
    rightCounter: Object
});

const isRightCounterMax = computed(() => {
    const {rightCounter, maxCounter} = props.rightCounter;
    return (rightCounter + 1 === maxCounter) ? '#ccc' : 'currentColor'
});
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" :fill="isRightCounterMax" class="bi bi-chevron-right"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
</template>

<style scoped></style>