<template>
  <v-container>
    <h2 v-if="!add" class="mb-8">PARTICIPANTES</h2>
    <v-btn v-if="!add" @click="add = !add" color="primary">Adicionar Participante</v-btn>
    <FormAddTeam v-if="add"  />
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
      add: false,
      selectedTeam: null,
    }
  },
  mounted() {
    this.$store.dispatch("team/getApiTeams")
  },
  computed: {
    ...mapGetters("team", ["getSearchTeams"])
  }
}
</script>

<style module>
  .toolbar {
    background-color: #00796B !important;
    color: #fff !important;
  }
</style>