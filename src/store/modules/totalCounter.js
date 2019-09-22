const state = () => ({ modules: [] })

const getters = {
  count (state, getters, rootState) {
    let sum = 0
    // 他のモジュールにアクセスできる!
    state.modules.forEach((elem) => {
      sum += rootState[elem].count
    })
    return sum
  },
}

const actions = {
  // こちらでは値(val)を用いてcommitする
  setModules ({ commit }, val) {
    commit('setModules', val)
  },
}

const mutations = {
  // actionsから値(val)を受け取る
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
