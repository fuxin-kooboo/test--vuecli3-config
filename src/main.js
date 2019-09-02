import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import './sass/app.scss'
import './plugins/svg-sprite-loader'
import store from './store'
// import GlobalComponentInstaller from 'components/global'

Vue.config.productionTip = false
// GlobalComponentInstaller(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
