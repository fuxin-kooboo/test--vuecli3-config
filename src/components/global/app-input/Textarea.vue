<template>
  <div
    class="Form_group Form_textarea"
    :class="{ 'error': hasErrors }"
    :data-name="dataName"
  >
    <label class="Form_label" v-if="label">{{ label }}</label>
    <textarea
      class="Form_control"
      :placeholder="placeholder"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
    >
    </textarea>
    <p class="tip-error" v-for="(error, index) in errors" :key="index">{{ label || placeholder }} {{ error }}</p>
  </div>
</template>

<script>
  import InputMixin from './input'
  import ValidationMixin from './validation'

  export default {
    mixins: [InputMixin, ValidationMixin]
  }
</script>

<style lang="scss">
  .Form {
    &_textarea {
      .Form_control {
        border: .01rem solid #9b9b9b;
        min-height: 1rem;
      }

      .Form_label {
        font-size: .16rem;
        line-height: .24rem;
        margin-bottom: .03rem;
      }

      &.Form_group {
        margin-bottom: .2rem;
      }

      &-withBackground {
        .Form_control {
          background-color: rgba(216, 216, 216, .25);
        }

        .Form_label {
          color: #666;
        }
      }
    }
  }
</style>
