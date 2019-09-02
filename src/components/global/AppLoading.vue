<template>
  <div class="AppLoadingMask">
    <app-spinner
      :component="'half-circle-spinner'"
      :animation-duration="1000"
      :size="size"
      :color="spinnerColor"
    />
  </div>
</template>

<script>
  export default {
    name: 'app-loading',

    props: {
      isLoading: {
        type: Boolean,
        default: false
      },
      spinnerColor: {
        type: String,
        default: '#1474a4'
      },
      size: {
        type: Number,
        default: 60
      }
    }
  }
</script>

<style lang="scss">
  .AppLoadingMask {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 1);
    transition: opacity .3s;
    z-index: 9;

    &.fullscreen {
      position: fixed;
      z-index: 2500;
      background-color: rgba(242, 242, 242, 1);
    }

    .AppSpinner {
      position: absolute;
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%);
    }
  }
</style>
