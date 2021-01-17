<template>
  <div>
    <button @click="click" class="rounded border-2 border-green-400 mt-2 bg-green-700 text-green-100 mr-3 p-1 shadow-sm hover:bg-green-100 hover:text-green-700 focus:outline-none">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    click () {
      this.$emit('click')
    }
  },
}
</script>
