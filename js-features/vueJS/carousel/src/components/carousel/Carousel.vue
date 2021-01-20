<template>
  <div class="flex flex-col">
    <slot></slot>
    <div>
      <div class="flex w-full justify-center">
        <div v-for="n in nbSlides" :key="n" class="flex flex-row justify-center">
          <button @click="defineSlide(n)" class="rounded-full bg-gray-500 px-1 mr-2 my-3 focus:outline-none hover:bg-black h-3 w-3"  :class="{selected: n === index + 1}" >
            &nbsp;
          </button>
        </div>
      </div>
      <div class="flex w-full justify-center">
        <Button @click="prevSlide">
          Précédente
        </Button>
        <Button @click="removeSlide">
          -
        </Button>
        <Button @click="addSlide">
          +
        </Button>
        <Button @click="nextSlide">
          Suivante
        </Button>
      </div>
    </div>
  </div>
</template>

<script>

import Button from './Button'

export default {

  components: {
    Button
  },
  props: {
    nbSlides: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      index: 0,
      direction: 'right',
      slides: [],
    }
  },
  mounted () {
    this.slides = this.$children
  },
  methods: {
    prevSlide () {
      this.direction = 'left'
      this.index = this.index - 1 >= 0 ? this.index - 1 : this.nbSlides - 1
    },
    nextSlide () {
      this.direction = 'right'
      this.index = this.index + 1 <= this.nbSlides - 1 ? this.index + 1 : 0
    },
    defineSlide (index) {
      this.index = index - 1
    },
    addSlide () {
      this.$parent.nbSlides++
    },
    removeSlide () {
      this.$parent.nbSlides--
    }
  },
  watch: {
    "nbSlides": function(){
      if(this.index >= this.nbSlides){
        this.index = this.nbSlides - 1
      }
    }
  },
}
</script>

<style>
  .selected {
    background-color: green;
    color: white
  }
</style>
