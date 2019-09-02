<template>
  <div
    class="Form_group-choice-radio"
    :data-name="dataName"
  >
    <input
      type="radio"
      class="input-hide"
      :id="id"
      v-bind="$attrs"
      v-on="listeners"
      :checked="checked"
    >
    <label class="form-label" :for="id">{{ label }}<slot></slot></label>
  </div>
</template>

<script>
  export default {
    name: 'app-radio',

    inheritAttrs: false,

    model: {
      prop: 'value',
      event: 'change'
    },

    props: {
      value: {
        type: String,
        default: null
      },

      label: {
        type: String,
        default: null
      },

      id: {
        type: String,
        required: true
      },

      dataName: {
        type: String,
        default: null
      }
    },

    computed: {
      checked () {
        return this.value === this.$attrs.value
      },

      listeners () {
        return {
          ...this.$listeners,
          change: evt => {
            this.$emit('change', evt.target.value)
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .Form_group-choice-radio {
    .form-label {
      display: inline-block;
    }
  }
</style>
