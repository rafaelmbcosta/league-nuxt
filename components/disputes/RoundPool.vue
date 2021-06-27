<template>
  <div>
   <v-chip
      v-for="(round, index) in pool"
      :key="`pool_${index}`"
      class="ma-2"
      close
      outlined
      @click:close="add(round)"
      close-icon="add_circle"
      color="teal"
    >
      <b>#&nbsp;{{ round.number }}</b>
    </v-chip>
  </div>
</template>

<script>
import gql from "graphql-tag"
import { DISPUTES } from "@/graphql/queries/disputes/disputes"
import { POOL } from "@/graphql/queries/rounds/pool"

export default {
  props: ["pool", "dispute"],
  methods: {
    async add(round) {
      try {
        await this.$apollo.mutate({
          mutation: gql`mutation ($id: Int!, $roundId: Int!) {
            setDisputeToRound(id: $id, roundId: $roundId) {
              id
            }
          }`,
          variables: {
            id: parseInt(this.dispute.id),
            roundId: parseInt(round.id)
          },
          refetchQueries: [{ query: DISPUTES }, { query: POOL }],
          update: () => {
            this.$store.dispatch('util/sendMessage', ['success', 'Rodada vinculada com sucesso'])
          }
        })
      } catch (e) {
        console.log(e)
        this.$store.dispatch('util/sendMessage', ['error', `Erro ao vincular rodada ${e}`])
      }
    }
  }
}
</script>

<style>

</style>
