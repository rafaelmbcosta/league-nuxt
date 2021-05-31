// import { getTeams } from '@/services/mock'

const state = {
  teams: [],
  showTeamForm: false,
  searchTeams: []
}

const getters = {
  getTeamForm: state => { return state.showTeamForm },
  getTeams: state => { return state.teams },
  getSearchTeams: state => { return state.searchTeams }
}

export const mutations = {
  SET_LOADING (state, value) {
    state.loading = value
  },
  SET_SEARCH_TEAMS (state, data) {
    console.log(data, 'Mutation')
    state.searchTeams = data
  }
}

export const actions = {
  async getApiTeams ({ commit }, param) {
    const response = await this.$axios.$get(`/api/v1/teams/find_team?search[q]=${param}`)
    console.log(response, 'Response')
    await commit('SET_SEARCH_TEAMS', response)
  },
  async setLoading ({ commit }, value) {
    await commit('SET_LOADING', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}