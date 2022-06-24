<script setup>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';

const props = defineProps(['leftCounter']);
const isLeftZero = computed(() => {
    return (props.leftCounter === 0) ? '#ccc' : 'currentColor';
});
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" :fill="isLeftZero" class="bi bi-chevron-left primary-color"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
    </svg>
</template>