<template>
  <v-container>
    <h2 v-if="!add" class="mb-8">
      PARTICIPANTES
    </h2>
    <v-btn v-if="!add" color="primary" @click="add = !add">
      Adicionar Participante
    </v-btn>
    <FormAddTeam v-if="add" />
    <TeamList class="mt-12" />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import TeamList from '@/components/teams/TeamList'
import FormAddTeam from '@/components/teams/FormAddTeam'

export default {
  components: { TeamList, FormAddTeam },
  data: () => {
    return {
      add: false,
      selectedTeam: null
    }
  },
  computed: {
    ...mapGetters('team', ['searchTeams'])
  }
}
</script>

<style module>
  .toolbar {
    background-color: #00796B !important;
    color: #fff !important;
  }
</style>
