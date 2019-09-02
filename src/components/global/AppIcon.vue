<template>
  <svg class="icon" :class="iconClass">
    <use :xlink:href="href" />
  </svg>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },

    computed: {
      iconClass () {
        return `icon-${this.name}`
      },
      href () {
        return `#${this.name}`
      }
    }
  }
</script>

<style lang="scss">
  .icon {
    display: inline-block;
    vertical-align: middle;
    width: .24rem;
    height: .24rem;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
</style>
