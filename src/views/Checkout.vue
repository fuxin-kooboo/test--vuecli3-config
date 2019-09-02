<template>
  <div class="Home">
    <p class="Home-color">home page</p>
    <router-link to="/about">about</router-link><br>
    <router-link to="/checkout">checkout</router-link><br>
    <router-link to="/todo">todo</router-link>
    <test/>
  </div>
</template>

<script>
import Test from '../components/Test'

export default {
  name: 'checkout',

  components: {
    Test
  }
}
</script>

<style lang="scss">
.Home {
  font-size: .24rem;
  &-color {
    color: $pink-deeper;
  }
}
</style>