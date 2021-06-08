<template>
    <div>
    <h3> EDITAR MÊS DE DISPUTA </h3>

    <BorderCard
      class="mt-10"
      color="#00796b"
      v-if="!!dispute"
    >
      <v-text-field
        label="NOME"
        v-model="dispute.name"
        required="true"
      />
      <v-btn
        color="primary"
        :disabled="!dispute.name || loading"
        @click="updateDispute"
      >
        ATUALIZAR
      </v-btn>

    </BorderCard>
    <v-btn class="mt-10" to="/disputes" color="error"> Voltar </v-btn>
  </div>
</template>

<script>
import BorderCard from '@/components/shared/BorderCard'
import { DISPUTES } from "@/graphql/queries/disputes/disputes"
import { POOL } from "@/graphql/queries/rounds/pool"
import gql from 'graphql-tag'

export default {
  components: { BorderCard },
  data() {
    return {
      loading: false,
      dispute: null
    }
  },
  mounted() {
    this.dispute = this.disputes.filter(element => element.id == this.$route.params.id)[0]
  },
  middleware: ['auth'],
  apollo: {
    roundPool: POOL,
    disputes: DISPUTES
  },
  methods: {
    async updateDispute() {
      try {
        this.loading = true
        await this.$apollo.mutate({
          mutation: gql`mutation($id: Int!, $name: String!) {
            editDispute(id: $id, name: $name) { id }
          }`,
          variables: {
            id: parseInt(this.dispute.id),
            name: this.dispute.name
          },
          refetchQueries: [{ query: DISPUTES }],
          update: () => {
            this.$store.dispatch('util/sendMessage', ['success', 'Mês de disputa atualizado com sucesso !'])
            this.loading = false
          }
        })
      } catch (error) {
        this.$store.dispatch("util/sendMessage", ['error', `Erro ao atualizar mês de disputa: ${error}`])
      }
    }
  }
}
</script>

<style>

</style>
