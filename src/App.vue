<template>
  <div id="app">
    <a href="/#/checkout" class="shopping-cart-bubble">
      <p><i class="fas fa-shopping-cart"></i> {{ cart.length }}</p>
    </a>
    <MainHeader></MainHeader>
    <router-view @add-to-cart="updateCart" :cart="cart"></router-view>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'

export default {
  name: 'app',
  components: {
    MainHeader
  },
  data(){
    return {
      cart: []
    }
  },
  methods: {
    updateCart(item) {
      this.cart.push(item)
    },
    getCart() {
      return this.cart
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.shopping-cart-bubble{
  background: #ddd;
  position: fixed;
  top: 0;
  right: 0;
  width: 62px;
  text-align: right;
  margin: 0;
  border-radius: 200px 0px 0px 200px;
  z-index: 10;
}

.shopping-cart-bubble p {
  margin-bottom: 0;
  padding: .25rem;
}

.ul-reset {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.container-1600 {
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;
  position: relative;
  max-width: 1600px;
  width: 100%;
}
</style>
