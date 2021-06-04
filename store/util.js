// import { login } from '@/services/mock'
// import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  loading: false, // login,
  token: null,
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
  SET_TOKEN (state, value) {
    state.token = value
  },
  CLEAR_TOKEN (state) {
    state.token = ''
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
  },
  closeSnack ({ commit }) {
    commit('RESET_SNACKBAR')
  },
  sendMessage ({ commit }, messageArray) {
    commit('SEND_MESSAGE', messageArray)
  }
}
