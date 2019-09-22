<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Vuex - サンプル</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Counter module="counterA"/>
    <Counter module="counterB"/>
    <DoubleCounter module="doubleCounterA"/>
    <DoubleCounter module="doubleCounterB"/>
    <TotalCounter/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import DoubleCounter from './components/DoubleCounter.vue'
import TotalCounter from './components/TotalCounter.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Counter,
    DoubleCounter,
    TotalCounter,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
