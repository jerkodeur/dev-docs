<template>
  <div id="app" class="w-full flex justify-center mt-4 flex-col items-center">
    <carousel :nbSlides="nbSlides">
      <carousel-slide v-for="n in nbSlides" :key="n" :index="n -1 ">
        <img :src="randomImage()" alt="" />
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from "./components/carousel/Carousel";
import CarouselSlide from "./components/carousel/CarouselSlide";

export default {
  name: "App",
  components: {
    Carousel,
    CarouselSlide,
  },
  data() {
    return {
      nbSlides: 10,
    };
  },
  methods: {
    randomImage () {
      const number = Math.round(Math.random() * 1000);
      return `https://picsum.photos/id/${number}/850/500`;
    }
  },
};
</script>
