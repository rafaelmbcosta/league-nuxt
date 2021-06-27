<template>
  <div>
    <v-chip
      v-for="(round, index) in rounds"
      :key="`round_${index}`"
      class="ma-2"
      :close="round.status == 'created'"
      outlined
      @click:close="remove(round)"
      color="red"
    >
      <b>#&nbsp;{{ round.number }}</b>
    </v-chip>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { DISPUTES } from "@/graphql/queries/disputes/disputes"
import { POOL } from "@/graphql/queries/rounds/pool"

export default {
  props: ["rounds", "dispute"],
  methods: {
    async remove(round) {
      try {
        await this.$apollo.mutate({
          mutation: gql`mutation ($id: Int!) {
            removeDisputeFromRound(id: $id) {
              id
            }
          }`,
          variables: {
            id: parseInt(round.id)
          },
          refetchQueries: [{ query: DISPUTES }, { query: POOL }],
          update: () => {
            this.$store.dispatch('util/sendMessage', ['success', 'Rodada desvinculada com sucesso'])
          }
        })
      } catch (e) {
        console.log(e)
        this.$store.dispatch('util/sendMessage', ['error', `Erro ao desvincular rodada ${e}`])
      }
    }
  }
}
</script>

<style>

</style>
