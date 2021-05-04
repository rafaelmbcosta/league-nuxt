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
  },
  async logout() {
    console.log('logout called')
    await this.$auth.logout();
    // this.$store.state.auth.loggedIn = false
    // this.$store.state.auth.user = null
    this.$router.push('/')
  }
}