import axios from 'axios'
import { topScores } from '@/services/mock'

export const state = () => ({
  loading: false,
  scores: null,
  error: null
})

export const getters = {
  haveScores: state => state.loading === false && state.scores !== null && state.error === null
}

export const mutations =  {
  SET_LOADING(state, value) {
    state.loading = value
  },
  SET_TOP_SCORES(state, data) {
    state.scores = data
  }
}

export const actions = {
  getTopScores({commit}) {
    commit('SET_LOADING', true)
    topScores()
      .then(response => {
        commit('SET_TOP_SCORES', response.data)
      })
      .catch(error => {
        state.error = error
      })
      .finally(() => {
        commit('SET_LOADING', false)
      })
  }
}