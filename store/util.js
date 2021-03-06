// import { login } from '@/services/mock'
// import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  loading: false, // login
  snackBar: {
    show: false,
    color: '',
    text: ''
  }
})

export const mutations = {
  SET_LOADING (state, value) {
    state.loading = value
  },
  SEND_MESSAGE (state, [type, text]) {
    state.snackBar = { color: type, text, show: true }
  },
  RESET_SNACKBAR (state) {
    state.snackBar = {
      show: false,
      color: '',
      text: ''
    }
  }
}

export const actions = {
  async login ({ commit }, payload) {
    commit('SET_LOADING', true)
    try {
      const response = await this.$auth.loginWith('local', {
        data: { auth: payload }
      })
      this.$apolloHelpers.onLogin(response.data.jwt)
    } catch (err) {
      console.log('LOGIN ERROR', err)
    }
    commit('SET_LOADING', false)
  },
  async logout () {
    await this.$auth.logout()
    this.$apolloHelpers.onLogout()
    this.$router.push('/')
  },
  closeSnack ({ commit }) {
    commit('RESET_SNACKBAR')
  },
  sendMessage ({ commit }, messageArray) {
    commit('SEND_MESSAGE', messageArray)
  }
}
