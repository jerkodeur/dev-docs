<template>
  <transition :name="direction" >
    <div v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      index: 0
    }
  },
  computed: {
    visible () {
      return this.index === this.$parent.index
    },
    direction () {
      return 'slide_' + this.$parent.direction
    }
  }
}
</script>

<style>
  /* TODO Animation when enter */
  .slide_left-enter-active{
    animation: slide_left_In 2s;
  }

  /* TODO Animation when leave */
  .slide_left-leave-active{
    animation: slide_left_Out 2s;
    position: absolute;
    top: auto;
    left: 0;
  }

  .slide_right-enter-active{
    animation: slide_right_In 2s;
  }

  /* TODO Animation when leave */
  .slide_right-leave-active{
    animation: slide_right_Out 2s;
    position: absolute;
    top: auto;
    left: 0;
  }

  @keyframes slide_left_In {
    from {
      transform: translateX(100%)
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide_left_Out {
    from {
      transform: translateX(0)
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes slide_right_In {
    from {
      transform: translateX(-100%)
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide_right_Out {
    from {
      transform: translateX(100%)
    }
    to {
      transform: translateX(200%);
    }
  }
</style>
