<script>
// use normal <script> to declare options
export default {
    inheritAttrs: false
}
</script>

<script setup>
</script>
<template>
    <div :class="$attrs.class">
        <button @click="$attrs.onClick">
            <slot name="arrow"></slot>
        </button>
    </div>
</template>
<style scoped>
button {
    background: none !important;
    outline: none !important;
    border: none !important;
    font-size: 24px !important;
}
</style>