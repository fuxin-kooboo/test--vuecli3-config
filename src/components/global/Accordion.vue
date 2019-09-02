<template>
  <div class="Accordion" :class="{ 'expand': showBody }" :id="accordionId">
    <div class="Accordion_header flex-between" @click="toggle();trackConversion({name: 'interaction', description: title})">
      <h3
        class="Accordion_title"
      >
        <slot name="title"></slot>
      </h3>
      <span class="Accordion_arrow">
        <app-icon name="chevron-thin-down" />
      </span>
    </div>
    <div class="Accordion_body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'accordion',

    props: {
      title: {
        type: String,
        default: null
      },

      index: {
        type: Number,
        default: 1
      },

      id: {
        type: String,
        default: null
      }
    },

    data () {
      return {
        showBody: false
      }
    },

    computed: {
      accordionId () {
        return this.id ? this.id : 'accordion_' + this.index
      }
    },

    methods: {
      toggle (accordionId) {
        if (accordionId) {
          this.$parent.$emit('toggle-accordion', accordionId)
        } else {
          this.$parent.$emit('toggle-accordion', this.accordionId)
        }
      }
    }
  }
</script>

<style lang="scss">
  .Accordion {
    margin-bottom: .08rem;

    &:last-child {
      margin-bottom: 0;
    }

    @include media(tablet) {
      margin-bottom: .14rem;
    }

    &.expand {
      margin-bottom: 0 !important;

      > .Accordion_body {
        display: block;
      }

      > .Accordion_header {
        .Accordion_arrow {
          transform: rotate(-180deg);
        }
      }
    }

    &_header {
      background: rgba(0, 102, 161, .15);
      padding: .255rem .15rem;
      color: $blue;
      font-weight: 500;
      cursor: pointer;
    }

    &_arrow {
      display: inline-flex;

      .icon-chevron-thin-down {
        color: #fff;
      }

      @include media(tablet) {
        margin: 0 .12rem;
      }
    }

    &_title {
      font-weight: 500;
      font-size: .14rem;
    }

    &_body {
      display: none;
      padding: .15rem 0;

      @include media(tablet) {
        padding: .25rem .15rem;
      }
    }

    &-sub {
      @include media(tablet) {
        margin-bottom: .1rem;
      }

      .Accordion_header {
        background: #f5f5f5;
        padding: .12rem .14rem;
        color: #212121;
      }

      .Accordion_arrow {
        margin: 0 .08rem;

        .icon {
          width: .12rem;
          height: .12rem;
          color: #787878 !important;
        }
      }
    }
  }
</style>
