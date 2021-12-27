export const state = () => ({
  teams: [],
  searchTeams: [],
  loading: false
})

export const getters = {
  searchTeams: state => state.searchTeams,
  isLoading: state => state.loading
}

export const mutations = {
  SET_IS_LOADING (state, value) {
    state.loading = value
  },
  SET_SEARCH_TEAMS (state, data) {
    state.searchTeams = data
  }
}

export const actions = {
  async getTeams ({ commit }, param) {
    const response = await this.$axios.$get(`/api/v1/teams/find_team?search[q]=${param}`)
    await commit("SET_SEARCH_TEAMS", response)
  },
  async activeTeam ({ _commit }, { active, id }) {
    try {
      await this.$axios.$post("/api/v1/teams/activation", {
        team: {
          id,
          active: !active
        }
      })
    } catch (err) {
      console.log(err)
    }
  },

  async addTeams ({ commit, state }, param) {
    await commit("SET_IS_LOADING", true)
    try {
      await this.$axios.$post("/api/v1/teams", {
        team: {
          name: param.nome,
          slug: param.slug,
          url_escudo_png: param.url_escudo_png,
          player_name: param.nome_cartola,
          id_tag: param.time_id
        }
      })
      commit("util/SEND_MESSAGE", ["success", "Time adicionado com sucesso!"], { root: true })
    } catch (err) {
      commit("util/SEND_MESSAGE", ["error", `Erro ao cadastrar time: ${err}`], { root: true })
    } finally {
      await commit("SET_IS_LOADING", false)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
