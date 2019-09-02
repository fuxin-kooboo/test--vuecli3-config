<template>
  <div class="About">
    <p class="About-color">about page</p>
    <router-link to="/about">about</router-link><br>
    <router-link to="/checkout">checkout</router-link><br>
    <router-link to="/todo">todo</router-link>
    <test/>
  </div>
</template>

<script>
import Test from '../components/Test'
export default {
  name: 'about',
  components: {
    Test
  }
}
</script>

<style lang="scss">
.About {
  font-size: .24rem;
  &-color {
    color: $pink-deeper;
  }
}
</style>