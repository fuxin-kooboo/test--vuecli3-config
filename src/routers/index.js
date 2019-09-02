import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Checkout from '../views/Checkout.vue'
import Todo from '../views/Todo.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/checkout',
      component: Checkout
    },
    {
      path: '/checkout',
      name: 'checkout',      
      component: Checkout
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }, 
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    }    
  ]
})

export default router