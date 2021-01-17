<template>
  <div>
    <slot></slot>
    <button @click="prevSlide">Précédente</button>
    <button @click="nextSlide">Suivante</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      slides: []
    }
  },
  mounted () {
    this.slides = this.$children
    this.slides.forEach((slide, index) => {
      slide.index = index
    })
    console.log(this.slides);
  },
  computed: {
    nbSlides() {
      return this.slides.length
    }
  },
  methods: {
    prevSlide () {
      this.index = this.index - 1 >= 0 ? this.index - 1 : this.nbSlides - 1
    },nextSlide () {
      this.index = this.index + 1 <= this.nbSlides - 1 ? this.index + 1 : 0
    }
  },
}
</script>
