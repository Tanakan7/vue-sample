const state = () => ({
  step : 1,
  count: 0,
})

const getters = {
  step : state => state.step,
  count: state => state.count,
}

const actions = {
  increment ({ commit }) {
    commit('increment')
  },
}

const mutations = {
  // シングルcounterのみの合計値をインクリメントする
  // (not トータルカウンターのインクリメントと混同しない)
  increment (state) {
    state.count += state.step
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
