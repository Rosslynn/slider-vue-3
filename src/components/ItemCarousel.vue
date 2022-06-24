<script setup>

const props = defineProps({
    testimonial: {
        type: Object,
        required: true
    },
    translateX: {
        type: Object,
        required: true
    },
    modelModifiers: { defaults: () => { } }
});

function determineTranslateInX() {
    return props.translateX.containerCarouselWidth * props.translateX.index;
}

</script>

<template>
    <div class="row align-items-center px-5 item-carousel" :class="{ 'set-position': props.modelModifiers?.isAbsolute }"
        :style="{ 'transform': `translate3d(${determineTranslateInX()}px, 0px, 0px)` }">
        <div class="col-12 col-md-4 py-3 py-md-0 text-center">
            <img :src="testimonial.image.url" alt="Testimonial image" class="img-fluid rounded">
        </div>
        <div class="col-12 col-md-8 p-3 p-md-5">
            <h3 class="text-dark">Nuestros clientes dicen...</h3>
            <p class="my-4 text-muted">{{ testimonial.testimony }}</p>
            <p class="font-weight-bold">{{ testimonial.author }}</p>
        </div>
    </div>
</template>

<style scoped>
.item-carousel {
    user-select: none;
}

.item-carousel img {
    pointer-events: none;
}

.set-position {
    position: absolute;
    top: 0;
    z-index: -1;
}
</style> 