<template>
  <component :is="component" v-bind="componentProps" class="AppSpinner" />
</template>

<script>
  import { LoopingRhombusesSpinner, HalfCircleSpinner } from 'epic-spinners'

  export default {
    props: {
      component: {
        type: String,
        default: 'looping-rhombuses-spinner'
      },
      rhombusSize: {
        type: Number,
        default: null
      },
      color: {
        type: String,
        default: null
      },
      animationDuration: {
        type: Number,
        default: 2500
      },
      size: {
        type: Number,
        default: null
      }
    },

    data () {
      return {
        componentProps: {
          animationDuration: this.animationDuration,
          rhombusSize: this.rhombusSize,
          color: this.color,
          size: this.size
        }
      }
    },

    components: {
      LoopingRhombusesSpinner,
      HalfCircleSpinner
    }
  }
</script>
