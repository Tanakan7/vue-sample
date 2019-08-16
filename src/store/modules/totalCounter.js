const state = () => ({ modules: [] })

const getters = {
  count (state, getters, rootState) {
    let sum = 0
    // 他のモジュールにアクセスできる!
    state.modules.forEach((elem) => {
      console.log('elem', elem)
      sum += rootState[elem].count
    })
    return sum
  },
}

const actions = {
  setModules ({ commit }, val) {
    commit('setModules', val)
  },
}

const mutations = {
  setModules (state, val) {
    state.modules = val
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
