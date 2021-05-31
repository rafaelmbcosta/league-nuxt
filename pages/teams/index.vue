<template>
  <v-container>
    <h2 class="mb-8">PARTICIPANTES</h2>
    <v-btn @click="getTeamsAxios" color="primary">Adicionar Participante</v-btn>
    <FormAddTeam />
    <TeamList class="mt-12" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"
import TeamList from './TeamList'
import FormAddTeam from './FormAddTeam'

export default {
  components: { TeamList, FormAddTeam },
  data: () => {
    return {
      selectedTeam: null,
    }
  },
  mounted() {
    this.$store.dispatch("team/getApiTeams")
  },
  computed: {
    ...mapGetters("team", ["getSearchTeams"])
  },
  methods: {
    getTeamsAxios() {
     this.$store.dispatch("team/getApiTeams", 'zora')
    },
    async saveTeam() {
      try {
        await this.$apollo.mutate({
          mutation: gql`mutation($teamId: Int!) {
            createTeamById(teamId: $teamId) {
              id
              idTag
              playerName
            }
          }`,
          variables: {
            teamId: this.idTag
          },
        });
      } catch (err) {
        this.$store.dispatch("util/sendMessage", ["error", `Erro ao cadastrar time pela tag: ${err}`]);
      }
    }
  }
}
</script>

<style module>
  .toolbar {
    background-color: #00796B !important;
    color: #fff !important;
  }
</style>