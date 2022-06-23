<script setup>
import { onMounted, ref } from 'vue';

const testimonials = ref([
    {
        author: 'Raúl Diaz',
        image: {
            url: 'https://cloud.modyocdn.com/uploads/fdd876ff-70ff-459f-9bf3-2e48fece6439/original/raul.png'
        },
        testimony: 'Me acerqué a Dynamic Bank, obtuve mi crédito y ya estoy solicitando el tercero. De verdad le doy gracias por confiar en mí\n'
    },
    {
        author: 'Adriana Pérez',
        image: {
            url: 'https://cloud.modyocdn.com/uploads/2a0ade06-c77d-4b05-a6c8-bcfa4fa2bedf/original/adriana.png'
        },
        testimony: 'Me siento muy bien con Dynamic Bank, porque me dieron la oportunidad de crecer como comerciante y tengo otros proyectos en mente para seguir creciendo.\n'
    },
]);

let direction = ref('');
let actualPositionX = ref(null);
let isMouseClicked = ref(false);

document.addEventListener('mousedown', (e) => {
    isMouseClicked.value = true;
    console.log('Document is being clicked');
});

document.addEventListener('mouseup', (e) => {
    isMouseClicked.value = false;
    console.log('Document is NOT being clicked');
});



document.addEventListener('mousemove', (e) => {

    if (e.pageX < actualPositionX && isMouseClicked.value) {
        direction.value = 'moving to left';
    }

    if (e.pageX > actualPositionX && isMouseClicked.value) {
        direction.value = 'moving to right';
    }

    if (isMouseClicked.value) {
        actualPositionX = e.pageX;
        console.log({
            x: e.pageX,
            direction: direction.value
        });
    }

});
</script>

<template>
    <section id="widget-testimonials" style="background-color: #eee;">
        <div class="container">
            <div class="row align-items-center px-5 carousel-item">
                <div class="col-12 col-md-4 py-3 py-md-0 text-center">
                    <img :src="testimonials[0].image.url" alt="Testimonial image" class="img-fluid rounded">
                </div>
                <div class="col-12 col-md-8 p-3 p-md-5">
                    <h3 class="text-dark">Nuestros clientes dicen...</h3>
                    <p class="my-4 text-muted">{{ testimonials[0].testimony }}</p>
                    <p class="font-weight-bold">{{ testimonials[0].author }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
