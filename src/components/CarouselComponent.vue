<script setup>
import { onMounted, ref } from 'vue';

import ButtonComponent from './ButtonComponent.vue';
import ArrowLeft from './icons/ArrowLeft.vue';
import ArrowRight from './icons/ArrowRight.vue';
import ItemCarousel from './ItemCarousel.vue';
import { getSpecificElementLimits, translateSlideInX } from '../utils/HTMLElements';

const testimonials = ref([
    {
        meta: {
            uuid: 'baa151b6-5038-4808-be2b-5f80cda01ea3'
        },
        author: 'Raúl Diaz',
        image: {
            url: 'https://cloud.modyocdn.com/uploads/fdd876ff-70ff-459f-9bf3-2e48fece6439/original/raul.png'
        },
        testimony: 'Me acerqué a Dynamic Bank, obtuve mi crédito y ya estoy solicitando el tercero. De verdad le doy gracias por confiar en mí\n'
    },
    {
        meta: {
            uuid: '5b2dae54-0825-41fb-9984-451af614dccc'
        },
        author: 'Adriana Pérez',
        image: {
            url: 'https://cloud.modyocdn.com/uploads/2a0ade06-c77d-4b05-a6c8-bcfa4fa2bedf/original/adriana.png'
        },
        testimony: 'Me siento muy bien con Dynamic Bank, porque me dieron la oportunidad de crecer como comerciante y tengo otros proyectos en mente para seguir creciendo.\n'
    },
    {
        meta: {
            uuid: '5b2dae54-0825-41fb-9984-451af614dccc'
        },
        author: 'AXXXXX',
        image: {
            url: 'https://cloud.modyocdn.com/uploads/2a0ade06-c77d-4b05-a6c8-bcfa4fa2bedf/original/adriana.png'
        },
        testimony: 'Me siento muy bien con Dynamic Bank, porque me dieron la oportunidad de crecer como comerciante y tengo otros proyectos en mente para seguir creciendo.\n'
    },
    {
        meta: {
            uuid: 'baa151b6-5038-4808-be2b-5f80cda01ea3'
        },
        author: 'Raúl Diaz',
        image: {
            url: 'https://cloud.modyocdn.com/uploads/fdd876ff-70ff-459f-9bf3-2e48fece6439/original/raul.png'
        },
        testimony: 'Me acerqué a Dynamic Bank, obtuve mi crédito y ya estoy solicitando el tercero. De verdad le doy gracias por confiar en mí\n'
    },
]);

let containerCarouselWidth = ref(0);
let isAbsolute = ref(true);
let carouselSlides = undefined;
let leftCounter = ref(0);
let rightCounter = ref(0);

onMounted(() => {
    /* Contenedor de los slides */
    const containerCarousel = document.querySelector('#container-carousel');
    const { width } = getSpecificElementLimits(containerCarousel);
    containerCarouselWidth.value = width;
    carouselSlides = document.querySelectorAll('.item-carousel.set-position');
});

function moveToLeft() {
    if ((leftCounter.value - 1) < 0) return;

    const options = {
        carouselSlides,
        operation: 'add',
        containerCarouselWidth: containerCarouselWidth.value,
        isClickedByButton: true
    }

    translateSlideInX(options);
    leftCounter.value -= 1;
    rightCounter.value -= 1;
}

function moveToRight() {
    if ((rightCounter.value + 1) >= testimonials.value.length) return;

    const options = {
        carouselSlides,
        operation: 'subtract',
        containerCarouselWidth: containerCarouselWidth.value,
        isClickedByButton: true
    }
    translateSlideInX(options);
    leftCounter.value += 1;
    rightCounter.value += 1;
}
</script>

<template>
    <section id="widget-testimonials">
                  
        <div class="container position-relative overflow-hidden " id="container-carousel">
            <div style="visibility: hidden;">
                <ItemCarousel :testimonial="testimonials[0]" :translateX="{ containerCarouselWidth, index: 0 }">
                </ItemCarousel>
            </div>
            <ItemCarousel v-model.isAbsolute="isAbsolute" v-for="(testimonial, index) in testimonials"
                :key="testimonial.meta.uuid" :testimonial="testimonial" :translateX="{ containerCarouselWidth, index }">
            </ItemCarousel>

            <!-- Left Arrow -->
            <button-component @click="moveToLeft" class="button-arrow button-arrow-left">
                <template #arrow>
                    <ArrowLeft :leftCounter="leftCounter"/>
                </template>
            </button-component>

            <!-- Right arrow -->
            <button-component  @click="moveToRight" class="button-arrow button-arrow-right">
                <template #arrow>
                    <ArrowRight :rightCounter="{rightCounter, maxCounter: testimonials.length}"  />
                </template>
            </button-component>
        </div>
    </section>
</template>

<style scoped>
.button-arrow {
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
}

.button-arrow-right {
    right: 0;
}

.button-arrow-left {
    left: 0;
}

#container-carousel {
    z-index: 9999999 !important;
}

#widget-testimonials {
    background-color: #eee;
    position: relative;
}

#widget-testimonials:after {
    content: '';
    display: block;
    position: absolute;
    background-image: url(https://cloud.modyocdn.com/uploads/1e3588d5-1d5b-4ddb-b73d-77d88e1e37b1/original/pattern_circle.png);
    background-position: top left;
    width: 30%;
    height: 55%;
    top: 10%;
    left: 0;
    z-index: 1;
}

.container {
    z-index: 2;
}

@media (max-width: 768px) {
    #widget-testimonials:after {
        width: 50%;
        height: 30%;
        top: 20%;
    }
}
</style>
