<template>
  <div class="Accordion_list">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'accordion-list',

    props: {
      expandFirstItem: {
        type: Boolean,
        default: true
      }
    },

    mounted () {
      this.autoExpandFirstItem()
      this.$on('toggle-accordion', accordionId => {
        this.toggleAccordion(accordionId)
      })
    },

    methods: {
      toggleAccordion (accordionId) {
        this.$children.forEach(item => {
          if (item.accordionId === accordionId) {
            item.showBody = !item.showBody
          } else {
            item.showBody = false
          }
        })
      },

      autoExpandFirstItem () {
        if (this.expandFirstItem) {
          this.$children[0].showBody = true
        }
      }
    }
  }
</script>
