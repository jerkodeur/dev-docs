<template>
  <div v-show="visible">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
    }
  },
  computed: {
    visible() {
      return this.index === this.$parent.index
    }
  },
  mounted() {
    console.log(this.visible);
  },
}
</script>
