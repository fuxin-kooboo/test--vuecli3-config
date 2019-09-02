<template>
  <div
    class="AppInfoField"
    :data-name="dataName"
  >
    <label class="AppInfoField_label">{{ label }}</label>
    <p class="AppInfoField_text">{{ text }}</p>
  </div>
</template>

<script>
  export default {
    name: 'app-info-field',

    props: {
      label: {
        type: String,
        default: null
      },

      text: {
        type: String,
        default: null
      },

      dataName: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="scss">
  .AppInfoField {
    padding: .09rem .1rem;

    @include media(tablet) {
      padding: .1rem .3rem;
      background: #f2f2f2;
      margin-bottom: .1rem;
      border-radius: .02rem;
    }

    &_label {
      display: block;
      font-weight: 400;
      font-size: .12rem;
      color: #9b9b9b;
      margin-bottom: .03rem;
    }

    &_text {
      display: block;
      width: 100%;
      color: #252525;
      font-weight: 500;
      font-size: .16rem;
      line-height: .23rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
