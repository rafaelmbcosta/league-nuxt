import { topScores } from "@/services/mock"

export const state = () => ({
  loading: false,
  scores: null,
  error: null
})

export const getters = {
  haveScores: state => state.loading === false && state.scores !== null && state.error === null
}

export const mutations = {
  SET_LOADING (state, value) {
    state.loading = value
  },
  SET_TOP_SCORES (state, data) {
    state.scores = data
  }
}

export const actions = {
  async getTopScores ({ commit }) {
    const response = await topScores()
    await commit("SET_TOP_SCORES", response.data)
  },
  async setLoading ({ commit }, value) {
    await commit("SET_LOADING", value)
  }
}
