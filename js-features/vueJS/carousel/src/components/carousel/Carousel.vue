<template>
  <div class="flex flex-col">
    <slot></slot>
    <div class="flex justify-center">
      <Button @click="prevSlide">
        Précédente
      </Button>
      <Button @click="nextSlide">
        Suivante
      </Button>
    </div>
  </div>
</template>

<script>

import Button from './Button'

export default {

  components: {
    Button
  },
  data () {
    return {
      index: 0,
      slides: []
    }
  },
  mounted () {
    console.log(this.$children);
    this.slides = this.$children
    this.slides.forEach((slide, index) => {
      slide.index = index
    })
    console.log(this.slides);
  },
  computed: {
    nbSlides() {
      return this.slides.length - 2
    }
  },
  methods: {
    prevSlide () {
      console.log(this.index, this.nbSlides);
      this.index = this.index - 1 >= 0 ? this.index - 1 : this.nbSlides - 1
      console.log('prev', this.index);
    },
    nextSlide () {
      console.log(this.index, this.nbSlides);
      this.index = this.index + 1 <= this.nbSlides - 1 ? this.index + 1 : 0
      console.log('next', this.index);
    }
  },
}
</script>
