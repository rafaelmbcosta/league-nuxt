// import { login } from '@/services/mock'
// import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  loading: false
})

export const mutations = {
  SET_LOADING (state, value) {
    state.loading = value
  }
}

export const actions = {
  async login ({ commit }, payload) {
    commit('SET_LOADING', true)
    try {
      await this.$auth.loginWith('local', {
        data: { auth: payload }
      })
    } catch (err) {
    }
    commit('SET_LOADING', false)
  },
  async logout () {
    await this.$auth.logout()
    this.$router.push('/')
  }
}
