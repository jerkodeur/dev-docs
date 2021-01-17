<template>
  <div id="app">
    <carousel>
      <carousel-slide>
        Bonjour les gens
      </carousel-slide>
      <carousel-slide>
        Au revoir les gens
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from './components/carousel/Carousel'
import CarouselSlide from './components/carousel/CarouselSlide'

export default {
  name: 'App',
  components: {
    Carousel,
    CarouselSlide,
  }
}
</script>
