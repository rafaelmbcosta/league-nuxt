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
    state.searchTeams = data
  }
}

export const actions = {
  async getApiTeams ({ commit }, param) {
    const response = await this.$axios.$get(`/api/v1/teams/find_team?search[q]=${param}`)
    await commit('SET_SEARCH_TEAMS', response)
  },
  async activeTeam ({ _commit }, { active, id }) {
    try {
      const response = await this.$axios.$post('/api/v1/teams/activation', { team: {
        id,
        active: !active
      } } )
    } catch(err) {
      console.log(err)
    }
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