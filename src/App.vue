<template>
  <div id="app">
    <MainHeader firstname="jason"></MainHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'


export default {
  name: 'app',
  components: {
    MainHeader,
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

.container-1600 {
    padding-left: 15px;
    padding-right: 15px;
    margin: auto;
    position: relative;
    max-width: 1600px;
    width: 100%;
}
</style>
