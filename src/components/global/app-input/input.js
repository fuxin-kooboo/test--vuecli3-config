export default {
  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    errorMessage: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    dataName: {
      type: String,
      default: null
    },
    autocomplete: {
      type: String,
      default: 'on'
    }
  },

  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: evt => this.$emit('input', evt.target.value),
        blur: evt => this.$emit('blur', evt.target.value)
      }
    }
  }
}
