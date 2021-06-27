<template>
  <v-container>
   <v-col>
      <h2 class="mb-8">ADCIONAR PARTICIPANTE PELA TAG</h2>
      <v-card class="left-border">
        <v-progress-linear v-if="isLoading" indeterminate color="teal darken-2" />
        <v-form ref="form">
          <v-card-text>
            <v-text-field
              label="TAG"
              v-model.number="idTag"
            />
          </v-card-text>
        </v-form>
        <v-card-actions>
          <v-btn class="ma-5" :disabled="isLoading" @click="saveMember" color="primary">Adicionar</v-btn>
          <v-btn class="ma-5" to="/teams" color="error">Voltar</v-btn>
        </v-card-actions>
      </v-card>
   </v-col>
  </v-container>
</template>

<script>
import CreateTeamByTag from '../graphql/mutations/teams/tag'
import { TEAMS } from '../graphql/queries/teams/list'

export default {
  name: "tag",
  data: () => {
    return {
      idTag: null,
      isLoading: false
    };
  },
  methods: {
    async saveMember() {
      this.isLoading = true
      try {
        await this.$apollo.mutate({
          mutation: CreateTeamByTag,
          variables: { teamId: this.idTag },
          refetchQueries: [{ query: TEAMS }]
        })
        this.$store.dispatch('util/sendMessage', ['success', 'Time adicionado com sucesso!'])
        this.$refs.form.reset()
      } catch (err) {
        this.$store.dispatch("util/sendMessage", ["error", `Erro ao cadastrar time pela tag: ${err}`]);
      } finally {
        this.isLoading = false
      }
    }
  }

};
</script>

<style>
  .left-border {
    border-left: 8px solid #008172 !important;
  }
</style>
