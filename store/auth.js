import { login } from '@/services/mock'

export const state = () => ({
  loading: false
})

export const mutations = {
  SET_LOADING(state, value) {
    state.loading = value
  }
}

export const actions = {
  async login({commit}, payload) {
    commit("SET_LOADING", true)
    console.log('auth', this.$auth)
    try {
      this.$auth.loginWith('local', {
        data: { auth: payload }
      })
    } catch (err) {
      console.log(err, 'Erro ao fazer login')
    }
    commit("SET_LOADING", false)
    await console.log(payload)
    await console.log('user', this.$auth.user)
    await this.$auth.fetchUser()
  }
}