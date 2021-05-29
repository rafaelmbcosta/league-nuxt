<template>
  <v-container>
   <v-col>
      <h2 class="mb-8">ADCIONAR PARTICIPANTE PELA TAG</h2>
      {{ typeof idTag }}
      <v-card class="left-border">
        <v-card-text>
          <v-text-field
           label="TAG"
           v-model.number="idTag"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="saveMember" color="primary">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
   </v-col>
  </v-container>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "tag",
  data: () => {
    return {
      idTag: null
    };
  },
  methods: {
    async saveMember() {
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
        this.$store.dispatch("util/sendMessage", ['error', `Erro ao cadastrar time pela tag: ${err}`])
      }
    }
  }

}
</script>

<style>
  .left-border {
    border-left: 8px solid #008172 !important;
  }
</style>