<script setup>
defineProps({ 
    testimonial: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="row align-items-center px-5 item-carousel">
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
    z-index: 9999 !important;
}
</style> 