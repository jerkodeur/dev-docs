<template>
  <div id="app" class="w-full flex justify-center mt-4">
    <carousel>
      <carousel-slide>
          <img src="https://picsum.photos/id/1022/850/500" alt="" />
      </carousel-slide>
        <carousel-slide>
          <img src="https://picsum.photos/id/1039/850/500" alt="" />
        </carousel-slide>
        <carousel-slide>
          <img src="https://picsum.photos/id/110/850/500" alt="" />
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
};
</script>
