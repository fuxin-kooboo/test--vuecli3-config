<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    class="AppButton"
    :class="{'loading': isLoading, 'disabled': disabled}"
    :disabled="isLoading || disabled"
    :data-name="dataName"
  >
    <app-spinner v-if="isLoading" :rhombus-size="spinnerSize" :color="spinnerColor" />
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'app-button',

    inheritAttrs: false,

    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      isLoading: {
        type: Boolean,
        default: false
      },
      spinnerColor: {
        type: String,
        default: '#fff'
      },
      spinnerSize: {
        type: Number,
        default: 10
      },
      dataName: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="scss">
  .AppButton {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: $blue;
    border-radius: .02rem;
    padding: .08rem .15rem;
    color: $white;
    font-size: .17rem;
    font-weight: 500;
    width: 100%;
    line-height: 1.15;

    @include media(tablet) {
      width: auto;
      max-width: 100%;
    }

    &.button-orange {
      background: $orange;
    }

    &.disabled,
    &.loading,
    &:disabled {
      background: #d8d8d8 !important;
      cursor: default;
    }

    .AppSpinner {
      margin-right: .1rem;
    }

    &.button-widthAuto {
      width: auto;
    }
  }
</style>
