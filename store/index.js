// import { topScores } from '@/services/mock'

export const state = () => ({
})

export const getters = {
}

export const mutations = {
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('top_scores/setLoading', true)
    await dispatch('top_scores/getTopScores')
    await dispatch('top_scores/setLoading', false)
  }
}
