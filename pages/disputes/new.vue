<template>
  <div>
    <h3> NOVO MÊS DE DISPUTA </h3>
    <BorderCard
      class="mt-10"
      color="#00796b"
    >
      <v-text-field
        label="NOME"
        v-model="description"
        required="true"
      />
      <v-btn
        color="primary"
        :disabled="!description || loading"
        @click="saveDispute"
      >
        CRIAR
      </v-btn>

    </BorderCard>
    <v-btn class="mt-10" to="/disputes" color="error"> Voltar </v-btn>
  </div>
</template>

<script>
import BorderCard from '@/components/shared/BorderCard'
import gql from 'graphql-tag'

export default {
  components: { BorderCard },
  data() {
    return {
      loading: false,
      description: ""
    }
  },
  middleware: ['auth'],
  methods: {
    async saveDispute () {
      try {
        this.loading = true
        await this.$apollo.mutate({
          mutation: gql`mutation($name: String!) {
            createDispute(name: $name) { id }
          }`,
          variables: {
            name: this.description
          },
          refetchQueries: [{
            query: gql`query {
              disputes {
                id
                name
                rounds {
                  number
                }
              }
            }`
          }],
          update: () => {
            this.$store.dispatch('util/sendMessage', ['success', 'Mês de disputa criado com sucesso !'])
            this.loading = false
            this.description = ''
          }
        })
      } catch (error) {
        this.$store.dispatch('util/sendMessage', ['error', `Erro ao criar mês de disputa: ${error}`])
      }
    }
  }
}
</script>

<style>

</style>
