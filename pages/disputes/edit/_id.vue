<template>
  <div>
    <h3> EDITAR MÊS DE DISPUTA </h3>

    <BorderCard
      v-if="!!dispute"
      class="mt-10"
      color="#00796b"
    >
      <v-text-field
        v-model="dispute.name"
        label="NOME"
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
    <v-btn class="mt-10" to="/disputes" color="error">
      Voltar
    </v-btn>
  </div>
</template>

<script>
import gql from "graphql-tag"
import BorderCard from "@/components/shared/BorderCard"
import { DISPUTES } from "~/graphql/queries/disputes/disputes.gql"
import { POOL } from "@/graphql/queries/rounds/pool"

export default {
  components: { BorderCard },
  middleware: ["auth"],
  data () {
    return {
      loading: false,
      dispute: null
    }
  },
  mounted () {
    this.dispute = this.disputes.filter(element => element.id == this.$route.params.id)[0]
  },
  apollo: {
    roundPool: POOL,
    disputes: DISPUTES
  },
  methods: {
    async updateDispute () {
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
            this.$store.dispatch("util/sendMessage", ["success", "Mês de disputa atualizado com sucesso !"])
            this.loading = false
          }
        })
      } catch (error) {
        this.$store.dispatch("util/sendMessage", ["error", `Erro ao atualizar mês de disputa: ${error}`])
      }
    }
  }
}
</script>

<style>

</style>
