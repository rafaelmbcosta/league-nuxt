<template>
  <div>
    <v-btn class="mr-5" :to="`disputes/${dispute.id}`" outlined color="primary">GERENCIAR RODADAS</v-btn>
    <v-btn class="mr-5" :to="`disputes/edit/${dispute.id}`" outlined color="yellow darken-4">EDITAR</v-btn>
    <v-btn class="mr-5" @click="deleteDispute()" outlined color="error">DESATIVAR</v-btn>
  </div>
</template>

<script>
import colors from 'vuetify/es5/util/colors'
import BorderCard from '@/components/shared/BorderCard'
import { DISPUTES } from '@/graphql/queries/disputes/disputes'
import gql from 'graphql-tag'

export default {
  props: ["dispute"],
  methods: {
    async deleteDispute() {
      try {
        let response = await this.$apollo.mutate({
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
            this.$store.dispatch('util/sendMessage', ['success', 'Mês de disputa removido com sucesso !'])
          }
        })
      } catch (error) {
        console.log(error)
        this.$store.dispatch("util/sendMessage", ['error', 'error'])
      }
    }
  }
}
</script>
