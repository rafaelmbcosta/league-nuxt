<template>
  <div>
    <v-btn class="mr-5" :to="`disputes/${dispute.id}`" outlined color="primary">
      GERENCIAR RODADAS
    </v-btn>
    <v-btn class="mr-5" :to="`disputes/edit/${dispute.id}`" outlined color="yellow darken-4">
      EDITAR
    </v-btn>
    <v-btn class="mr-5" outlined color="error" @click="deleteDispute()">
      DESATIVAR
    </v-btn>
  </div>
</template>

<script>
import gql from "graphql-tag"
import { DISPUTES } from "~/graphql/queries/disputes/disputes.gql"

export default {
  props: {
    dispute: {
      type: Object,
      required: true
    }
  },
  methods: {
    async deleteDispute () {
      try {
        await this.$apollo.mutate({
          mutation: gql`mutation($id: Int!) {
            deleteDispute(id: $id) {
              id
            }
          }`,
          variables: {
            id: parseInt(this.dispute.id)
          },
          refetchQueries: [{ query: DISPUTES }],
          update: () => {
            this.$store.dispatch("util/sendMessage", ["success", "Mês de disputa removido com sucesso !"])
          }
        })
      } catch (error) {
        this.$store.dispatch("util/sendMessage", ["error", "error"])
      }
    }
  }
}
</script>
