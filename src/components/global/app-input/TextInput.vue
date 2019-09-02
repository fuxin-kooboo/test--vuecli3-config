<template>
  <div
    class="Form_group"
    :class="{ 'error': hasErrors }"
    :data-name="dataName"
  >
    <label class="Form_label" v-if="label">{{ label }}</label>
    <input
      class="Form_control"
      :placeholder="placeholder"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
      :autocomplete="autocomplete"
      :type="$attrs.type || 'text'"
    >
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
