<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';

import ItemCarousel from './ItemCarousel.vue';
import { getSpecificElementLimits } from '../utils/getSpecificElementLimits';

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
]);

let direction = ref('');
let oldValueX = ref(null);
let isMouseClicked = ref(false);
let containerCarouselWidth = ref(0);
let isAbsolute = ref(true);
let carouselSlides = undefined;

onMounted(() => {
    /* Contenedor de los slides */
    const containerCarousel = document.querySelector('#container-carousel');
    const { width } = getSpecificElementLimits(containerCarousel);
    containerCarouselWidth.value = width;

    /* Slides */
    carouselSlides = document.querySelectorAll('.item-carousel.set-position');

    for (let slide of carouselSlides) {
        slide.addEventListener('mouseout', mouseIsNotBeingClicked);

        slide.addEventListener('mousedown', mouseIsBeingClicked);

        slide.addEventListener('mouseup', mouseIsNotBeingClicked);

        slide.addEventListener('mousemove', validateMouseMove);
    }
});

onUnmounted(() => {
    for (let slide of carouselSlides) {
        slide.removeEventListener('mouseout', mouseIsNotBeingClicked);

        slide.removeEventListener('mousedown', mouseIsBeingClicked);

        slide.removeEventListener('mouseup', mouseIsNotBeingClicked);

        slide.removeEventListener('mousemove', validateMouseMove);
    }
});

/**
 * Función ejecutada cuando el usuario deja de hacer clic sobre un slide
 */
function mouseIsNotBeingClicked() {
    isMouseClicked.value = false;
    console.log('Document is NOT being clicked');
}

/**
 * Función ejecutada cuando el usuario presiona un slide
 */
function mouseIsBeingClicked(e) {
    isMouseClicked.value = true;
    console.log('Document is NOT being clicked');
}

/**
 * Función que toma un objeto y obtiene los valores de la propiedad translate3d
 * @param {Object} el - Elemento a obtener su posición 3d XYZ
 */
function getTranslate3d(el) {
    const values = el.style.transform.split(/\w+\(|\);?/);
    if (!values[1] || !values[1].length) {
        return [];
    }
    return values[1].split(/,\s?/g);
}
/**
 * Función ejecutada cuando el usuario mueve el mouse sobre las sliders
 * @param {Object} e - Referencia al objeto que se le añade el eventListener
 */
function validateMouseMove(e) {

    if (e.pageX < oldValueX.value && isMouseClicked.value) {
        for (let slide of carouselSlides) {
            const [x] = getTranslate3d(slide);
            const [number] = x.split('px');
            slide.style.transform = `translate3d(${Number(number) - 1}px, 0px,0px )`;
        }

        /*  this.style.transform = `translate3d(${Number(number) - 1}px, 0px,0px )`; */
        direction.value = 'left';
    }

    if (e.pageX > oldValueX.value && isMouseClicked.value) {
        for (let slide of carouselSlides) {
            const [x] = getTranslate3d(slide);
            const [number] = x.split('px');
            slide.style.transform = `translate3d(${Number(number) + 1}px, 0px,0px )`;
        }
        direction.value = 'right';
    }

    if (isMouseClicked.value) {

        console.log(direction.value);
    }

    oldValueX.value = e.pageX;
}

</script>

<template>
    <section id="widget-testimonials">
        <div class="container position-relative overflow-hidden" id="container-carousel">
            <div style="visibility: hidden;">
                <ItemCarousel :testimonial="testimonials[0]" :translateX="{ containerCarouselWidth, index: 0 }">
                </ItemCarousel>
            </div>
            <ItemCarousel v-model.isAbsolute="isAbsolute" v-for="(testimonial, index) in testimonials"
                :key="testimonial.meta.uuid" :testimonial="testimonial" :translateX="{ containerCarouselWidth, index }">
            </ItemCarousel>
        </div>
    </section>
</template>

<style scoped>
#container-carousel {
    border: 1px solid red;
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
