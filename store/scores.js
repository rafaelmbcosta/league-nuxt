export const state = () => ({
  selected: {
    dispute: null,
    score: null
  },
  loading: false
})

export const getters = {
  selected: (state) => { 
    return {
      score: state.selected.score,
      dispute: parseInt(state.selected.dispute)
    }
   }
}

export const mutations = {
  SET_SELECTED(state, payload) {
    console.log(payload, 'mutations');
    state.selected = payload
  },
  SET_SCORE(state, payload) {
    state.selected.score = payload
  },
  SET_DISPUTE(state, payload) {
    state.selected.dispute = payload
  }
}

export const actions = {
  setSelected({commit}, payload) {
    console.log(payload, 'actions');
    commit('SET_SELECTED', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
