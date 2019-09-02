import Vue from 'vue'

const eventBus = {}
const bus = new Vue()

eventBus.install = function (Vue) {
  Vue.bus = bus
  Vue.prototype.$bus = bus
}

export default eventBus
