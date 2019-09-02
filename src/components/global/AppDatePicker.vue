<template>
  <div class="AppDatePicker">
    <label v-if="label" class="title title-date">
      {{ label }}
    </label>
    <v-date-picker
      v-model="date"
      :locale="languageCode"
      :input-props="inputProps"
      :is-required="true"
      :popover="popover"
      :masks="masks"
      v-on="listeners"
    />
  </div>
</template>

<script>
  import { detectedCulture, dataLocalFormat } from '@/utilities/common/culture'

  export default {
    name: 'app-date-picker',

    inheritAttrs: false,

    props: {
      value: {
        type: Date,
        default: null
      },
      label: {
        type: String,
        default: null
      }
    },

    data () {
      return {
        languageCode: detectedCulture.languageCode,
        date: this.value || new Date(),
        inputProps: {
          readonly: true,
          class: 'input-date input-blue'
        },
        popover: {
          visibility: 'focus'
        },
        masks: {
          weekdays: 'WW',
          input: [dataLocalFormat]
        }
      }
    },

    computed: {
      listeners () {
        return {
          ...this.$listeners
        }
      }
    }
  }
</script>

<style lang="scss">
  .AppDatePicker {
    display: block;

    .title-date {
      display: inline-block;
    }

    .input-date {
      cursor: pointer;
    }

    .vc-highlight {
      background-color: $blue;
    }

    .vc-day-content {
      &:hover {
        background-color: rgba(0, 102, 161, 0.15) !important;
      }
    }
  }
</style>
