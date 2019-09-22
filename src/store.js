import Vue from 'vue'
import Vuex from 'vuex'
import counter from './store/modules/counter.js'
import doubleCounter from './store/modules/doubleCounter.js'
import totalCounter from './store/modules/totalCounter.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    counterA: counter,
    counterB: counter,
    doubleCounterA: doubleCounter,
    doubleCounterB: doubleCounter,
    totalCounter,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
})

store.dispatch(
  'totalCounter/setModules',
  ['counterA', 'counterB','doubleCounterA', 'doubleCounterB']
)
export default store
