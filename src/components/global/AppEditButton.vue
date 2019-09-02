<template>
  <a
    v-bind="$attrs"
    v-on="$listeners"
    class="flex align-items-center AppEditButton"
    :class="{ 'disabled': $attrs.disabled }"
    :data-name="dataName"
  >
    <app-icon :name="name"/>
    {{ editButtonText }}
  </a>
</template>

<script>
  export default {
    name: 'app-edit-button',
    inheritAttrs: false,

    props: {
      dataName: {
        type: String,
        default: null
      },
      editable: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      editButtonText () {
        return this.editable ? this.$t('common.editButton.cancel', 'cancel') : this.$t('common.editButton.edit', 'edit')
      },
      name () {
        return this.editable ? 'cancel' : 'pencel'
      }
    }
  }
</script>

<style lang="scss">
  .AppEditButton {
    font-size: .16rem;
    color: $blue;
    line-height: .24rem;
    font-weight: 500;

    &.disabled {
      pointer-events: none;
      color: $disabled-color;

      .icon {
        color: $disabled-color;
      }
    }
  }
</style>
